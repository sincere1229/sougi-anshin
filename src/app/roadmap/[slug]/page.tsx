import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const dynamicParams = false

const ROADMAPS: Record<string, {
  title: string; diagnosisLabel: string; diagnosisHref: string;
  phase1Title: string; phase1: string;
  phase2Title: string; phase2: string;
  phase3Title: string; phase3: string;
}> = {
  'style-ippan': {
    title: '一般葬の準備90日ロードマップ',
    diagnosisLabel: '⛩️ 一般葬タイプ',
    diagnosisHref: '/diagnosis/style',
    phase1Title: '1〜30日目',
    phase1: '複数の葬儀社に見積もりを依頼する。参列者リストを作成する。菩提寺に連絡して日程を調整する。',
    phase2Title: '31〜60日目',
    phase2: '返礼品・料理のグレードを決める。死亡通知（案内状）の文面を準備する。喪主の挨拶文を考える。',
    phase3Title: '61〜90日目',
    phase3: '葬儀社と最終打ち合わせをする。参列者への連絡を完了する。四十九日法要の準備を始める。',
  },
  'style-kazoku': {
    title: '家族葬の準備90日ロードマップ',
    diagnosisLabel: '🏠 家族葬タイプ',
    diagnosisHref: '/diagnosis/style',
    phase1Title: '1〜30日目',
    phase1: '家族葬に対応した葬儀社に相談する。参列者の範囲（誰を呼ぶか）を家族で決める。',
    phase2Title: '31〜60日目',
    phase2: '呼ばない方への事後連絡の文面を準備する。返礼品・料理の規模を決める。',
    phase3Title: '61〜90日目',
    phase3: '葬儀社と最終確認をする。事後連絡（葬儀報告）のはがき・メールを準備する。',
  },
  'style-chokuso': {
    title: '直葬の準備90日ロードマップ',
    diagnosisLabel: '🕯️ 直葬タイプ',
    diagnosisHref: '/diagnosis/style',
    phase1Title: '1〜30日目',
    phase1: '直葬プランを扱う葬儀社を探して見積もりを取る。火葬場の空き状況を確認する。',
    phase2Title: '31〜60日目',
    phase2: 'お別れの時間をどのくらい設けるか決める。遺骨の埋葬先（お墓・納骨堂など）を決める。',
    phase3Title: '61〜90日目',
    phase3: '葬儀社と最終確認をする。四十九日の法要をどうするか家族で決める。',
  },
  'style-ichinichi': {
    title: '一日葬の準備90日ロードマップ',
    diagnosisLabel: '🌸 一日葬タイプ',
    diagnosisHref: '/diagnosis/style',
    phase1Title: '1〜30日目',
    phase1: '菩提寺がある場合は住職に一日葬の可否を確認する。一日葬プランの葬儀社に見積もりを依頼する。',
    phase2Title: '31〜60日目',
    phase2: '参列者リストを作成して連絡する。返礼品・料理の規模を決める。',
    phase3Title: '61〜90日目',
    phase3: '葬儀社と最終打ち合わせをする。四十九日法要の準備を始める。',
  },
  'cost-antei': {
    title: '費用準備OK 葬儀計画90日ロードマップ',
    diagnosisLabel: '✅ 費用安定',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '複数の葬儀社に事前見積もりを依頼して総額を比較する。互助会や葬儀保険の内容を確認する。',
    phase2Title: '31〜60日目',
    phase2: '法要・お墓の費用も含めた全体の費用計画を立てる。家族で費用の合意を取る。',
    phase3Title: '61〜90日目',
    phase3: '葬儀社を1社に絞って事前契約を検討する。遺言書・エンディングノートに葬儀の希望を記載する。',
  },
  'cost-chuukan': {
    title: '費用見直し 葬儀計画90日ロードマップ',
    diagnosisLabel: '📋 一部見直し',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '葬儀費用の内訳（何が含まれ何が別途か）を葬儀社に確認する。削減できる項目を把握する。',
    phase2Title: '31〜60日目',
    phase2: '複数社で相見積もりを取り、総額で比較する。互助会・葬儀保険の加入を検討する。',
    phase3Title: '61〜90日目',
    phase3: '費用計画を家族で共有する。足りない場合の対応策（ローン・立替など）を把握する。',
  },
  'cost-kiken': {
    title: '費用リスク高 緊急対策90日ロードマップ',
    diagnosisLabel: '🚨 費用リスク高',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '市区町村の福祉窓口に「葬祭扶助制度」の条件を確認する。直葬プランの葬儀社に相談する。',
    phase2Title: '31〜60日目',
    phase2: '葬儀ローン・立替払いサービスがある葬儀社を確認する。生命保険の受取人・支払い方法を確認する。',
    phase3Title: '61〜90日目',
    phase3: '費用の全体像を家族で共有する。最低限の費用でできる葬儀プランを葬儀社と確認する。',
  },
  'cost-jizensodan': {
    title: '事前相談から始める90日ロードマップ',
    diagnosisLabel: '💡 事前相談タイプ',
    diagnosisHref: '/diagnosis/cost',
    phase1Title: '1〜30日目',
    phase1: '近くの葬儀社2〜3社に「無料事前相談」を申し込む。各社の概算見積もりを比較する。',
    phase2Title: '31〜60日目',
    phase2: '家族を集めて葬儀の方針（スタイル・規模・費用上限）を話し合う。',
    phase3Title: '61〜90日目',
    phase3: '希望の葬儀スタイルと費用感を決め、エンディングノートに記録する。',
  },
  'haka-ippan': {
    title: '一般墓 購入90日ロードマップ',
    diagnosisLabel: '🪨 一般墓タイプ',
    diagnosisHref: '/diagnosis/haka',
    phase1Title: '1〜30日目',
    phase1: '菩提寺がある場合は住職に相談する。地域の霊園・石材店に資料請求・見学を申し込む。',
    phase2Title: '31〜60日目',
    phase2: '複数の霊園・石材店を見学して比較する。永代使用料・管理費・石材費の総額を確認する。',
    phase3Title: '61〜90日目',
    phase3: '購入する霊園・石材店を決めて契約する。後継者に場所・管理方法を伝える。',
  },
  'haka-jumoku': {
    title: '樹木葬 選び方90日ロードマップ',
    diagnosisLabel: '🌳 樹木葬タイプ',
    diagnosisHref: '/diagnosis/haka',
    phase1Title: '1〜30日目',
    phase1: '「樹木葬 ○○（地域）」で検索して候補を3〜5か所リストアップする。見学会に申し込む。',
    phase2Title: '31〜60日目',
    phase2: '見学する。「個別埋葬か合祀か」「後から取り出せるか」「宗教不問か」を確認する。',
    phase3Title: '61〜90日目',
    phase3: '契約する霊園を決める。家族に場所・連絡先を伝えておく。',
  },
  'haka-nokotsudo': {
    title: '納骨堂 選び方90日ロードマップ',
    diagnosisLabel: '🏛️ 納骨堂タイプ',
    diagnosisHref: '/diagnosis/haka',
    phase1Title: '1〜30日目',
    phase1: '最寄りの納骨堂をリストアップして資料請求する。運営主体（寺院・民間）を確認する。',
    phase2Title: '31〜60日目',
    phase2: '2〜3か所を見学する。「運営の安定性」「費用（初期＋年間管理費）」「アクセス」を比較する。',
    phase3Title: '61〜90日目',
    phase3: '契約する納骨堂を決める。家族に場所・連絡先・費用を伝えておく。',
  },
  'haka-sankotsu': {
    title: '散骨・手元供養 90日ロードマップ',
    diagnosisLabel: '🌊 散骨タイプ',
    diagnosisHref: '/diagnosis/haka',
    phase1Title: '1〜30日目',
    phase1: '散骨業者に「海洋散骨プラン」の資料請求をする。手元供養グッズも調べてみる。',
    phase2Title: '31〜60日目',
    phase2: '家族に散骨の意向を伝えて合意を取る。一部を手元に残すかどうかを決める。',
    phase3Title: '61〜90日目',
    phase3: '散骨業者を決めて詳細を確認する。手元供養グッズを選ぶ。',
  },
  'shukatsu-ok': {
    title: '終活メンテナンス90日ロードマップ',
    diagnosisLabel: '🌟 準備完了',
    diagnosisHref: '/diagnosis/shukatsu',
    phase1Title: '1〜30日目',
    phase1: '遺言書・エンディングノートの内容を見直す。財産に変動がないか確認する。',
    phase2Title: '31〜60日目',
    phase2: '保管場所を家族全員が知っているか確認する。デジタル資産（パスワード等）を更新する。',
    phase3Title: '61〜90日目',
    phase3: '医療方針（延命治療など）について家族と改めて話し合う。年1回の見直しを習慣化する。',
  },
  'shukatsu-chuukan': {
    title: '終活ステップアップ90日ロードマップ',
    diagnosisLabel: '📝 進行中',
    diagnosisHref: '/diagnosis/shukatsu',
    phase1Title: '1〜30日目',
    phase1: 'エンディングノートを1冊購入して毎日1項目だけ書く習慣をつける。',
    phase2Title: '31〜60日目',
    phase2: '財産一覧（預貯金・不動産・保険）を紙1枚にまとめる。',
    phase3Title: '61〜90日目',
    phase3: '葬儀の希望・お墓の希望を家族に伝える機会を作る。遺言書の作成を検討する。',
  },
  'shukatsu-mikaijin': {
    title: '終活スタート90日ロードマップ',
    diagnosisLabel: '🌱 これから開始',
    diagnosisHref: '/diagnosis/shukatsu',
    phase1Title: '1〜30日目',
    phase1: 'エンディングノートを1冊購入する（書店・100円ショップで入手可）。まず名前・生年月日だけ書く。',
    phase2Title: '31〜60日目',
    phase2: '家族に「もしものときの話をしたい」と切り出す機会を作る。',
    phase3Title: '61〜90日目',
    phase3: '財産（通帳・保険証書）の保管場所を1か所にまとめる。',
  },
  'shukatsu-kinkyuu': {
    title: '終活緊急整備90日ロードマップ',
    diagnosisLabel: '🚨 緊急整備',
    diagnosisHref: '/diagnosis/shukatsu',
    phase1Title: '1〜30日目',
    phase1: '司法書士か行政書士に「遺言書作成の無料相談」を申し込む。財産一覧を作成する。',
    phase2Title: '31〜60日目',
    phase2: '延命治療・臓器提供の意思を書面にまとめて家族に渡す。デジタル資産のパスワードを整理する。',
    phase3Title: '61〜90日目',
    phase3: '公正証書遺言の作成手続きを進める。エンディングノートを完成させる。',
  },
  'souzoku-sokuza': {
    title: '緊急手続き90日ロードマップ',
    diagnosisLabel: '🚨 今すぐ手続き',
    diagnosisHref: '/diagnosis/souzoku',
    phase1Title: '1〜7日目',
    phase1: '死亡届を7日以内に市区町村に提出する。火葬許可証を取得する。',
    phase2Title: '8〜14日目',
    phase2: '年金・健康保険の停止手続きを14日以内に行う。銀行に死亡の連絡をする（口座凍結前に必要な出金を）。',
    phase3Title: '15〜90日目',
    phase3: '相続人の確定・遺言書の確認・財産の洗い出しを行う。税理士・司法書士に相談する。',
  },
  'souzoku-chukikan': {
    title: '1〜3ヶ月手続き90日ロードマップ',
    diagnosisLabel: '📋 中期手続き',
    diagnosisHref: '/diagnosis/souzoku',
    phase1Title: '1〜30日目',
    phase1: '相続放棄を考える場合は3ヶ月以内に家庭裁判所へ申請する。相続人全員を確定する。',
    phase2Title: '31〜60日目',
    phase2: '準確定申告（4ヶ月以内）の準備をする。遺産分割協議の日程を決める。',
    phase3Title: '61〜90日目',
    phase3: '遺産分割協議書を作成する。不動産の名義変更（相続登記）の手続きを開始する。',
  },
  'souzoku-senmonka': {
    title: '専門家活用90日ロードマップ',
    diagnosisLabel: '👨‍💼 専門家相談',
    diagnosisHref: '/diagnosis/souzoku',
    phase1Title: '1〜30日目',
    phase1: '税理士に「相続税の申告が必要か」無料相談する。財産総額の概算を出す。',
    phase2Title: '31〜60日目',
    phase2: '司法書士に不動産の名義変更を依頼する。弁護士が必要な場合は相続トラブル専門弁護士に相談する。',
    phase3Title: '61〜90日目',
    phase3: '相続税申告（10ヶ月以内）の準備を専門家と進める。',
  },
  'souzoku-junbi': {
    title: '相続事前準備90日ロードマップ',
    diagnosisLabel: '✅ 事前準備',
    diagnosisHref: '/diagnosis/souzoku',
    phase1Title: '1〜30日目',
    phase1: '財産一覧（預貯金・不動産・有価証券）を更新する。遺言書の内容に変更がないか確認する。',
    phase2Title: '31〜60日目',
    phase2: '相続人全員に財産・遺言書の保管場所を伝える機会を作る。',
    phase3Title: '61〜90日目',
    phase3: '相続税の試算を税理士に依頼して、節税対策を検討する。',
  },
}

export async function generateStaticParams() {
  return Object.keys(ROADMAPS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const r = ROADMAPS[params.slug]
  if (!r) return {}
  return { title: `${r.title} | 葬儀ナビ`, description: `${r.diagnosisLabel}の方向け90日ロードマップ。` }
}

export default function RoadmapPage({ params }: { params: { slug: string } }) {
  const r = ROADMAPS[params.slug]
  if (!r) notFound()
  const phases = [
    { title: r.phase1Title, content: r.phase1 },
    { title: r.phase2Title, content: r.phase2 },
    { title: r.phase3Title, content: r.phase3 },
  ]
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <div style={{ marginBottom: 20 }}>
        <Link href={r.diagnosisHref} style={{ fontSize: 12, color: '#78716c', textDecoration: 'none' }}>← 診断に戻る</Link>
        <p style={{ fontSize: 11, color: '#d4af6a', fontWeight: 600, margin: '8px 0 4px' }}>{r.diagnosisLabel}</p>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', lineHeight: 1.4 }}>{r.title}</h1>
      </div>
      {phases.map((ph, i) => (
        <div key={i} style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ background: '#1c1917', color: '#d4af6a', borderRadius: 6, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937' }}>{ph.title}</span>
          </div>
          <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{ph.content}</p>
        </div>
      ))}
      <div style={{ background: '#faf9f7', border: '0.5px solid #e7e5e4', borderRadius: 12, padding: '16px', textAlign: 'center', marginTop: 8 }}>
        <Link href="/" style={{ display: 'inline-block', background: '#1c1917', color: '#d4af6a', borderRadius: 8, padding: '10px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>診断トップに戻る</Link>
      </div>
    </main>
  )
}
