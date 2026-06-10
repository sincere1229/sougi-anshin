import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '葬儀・相続・終活コラム一覧 | 葬儀ナビ',
  description: '葬儀・お墓・相続・終活について50記事以上の無料コラムを公開しています。',
}

const COLUMNS: { id: string; label: string; articles: { id: number; title: string }[] }[] = [
  { id: 'hajimete', label: '🕯️ 亡くなったらすること', articles: [{"id": 1, "title": "親が亡くなったら最初にすること"}, {"id": 2, "title": "死亡届の書き方と提出方法"}, {"id": 3, "title": "葬儀社の選び方・比較のポイント"}, {"id": 4, "title": "通夜・告別式の流れとマナー"}, {"id": 5, "title": "香典の金額相場と書き方マナー"}, {"id": 6, "title": "忌引き休暇の取り方・日数"}, {"id": 7, "title": "死亡後にすぐ解約すべきサービス一覧"}, {"id": 8, "title": "葬儀後のお礼・挨拶状の書き方"}, {"id": 9, "title": "四十九日法要の準備と流れ"}, {"id": 10, "title": "一周忌・三回忌の準備と費用"}] },
  { id: 'sougi-col', label: '⛩️ 葬儀の種類・費用', articles: [{"id": 1, "title": "家族葬とは？費用・流れ・注意点"}, {"id": 2, "title": "一般葬とは？費用・流れ・参列者対応"}, {"id": 3, "title": "直葬（火葬式）とは？費用・流れ"}, {"id": 4, "title": "一日葬とは？費用・菩提寺との関係"}, {"id": 5, "title": "葬儀費用の相場【全国平均データ】"}, {"id": 6, "title": "葬祭扶助制度とは？申請方法"}, {"id": 7, "title": "互助会とは？メリット・デメリット"}, {"id": 8, "title": "葬儀の見積もりで騙されないポイント"}, {"id": 9, "title": "宗派別 葬儀の違いと注意点"}, {"id": 10, "title": "生前予約・事前葬儀相談のメリット"}] },
  { id: 'haka-col', label: '🪨 お墓・供養', articles: [{"id": 1, "title": "樹木葬とは？費用・選び方・デメリット"}, {"id": 2, "title": "納骨堂とは？種類・費用・選び方"}, {"id": 3, "title": "散骨とは？方法・費用・法律"}, {"id": 4, "title": "墓じまいの費用と流れ"}, {"id": 5, "title": "永代供養とは？費用・種類"}, {"id": 6, "title": "お墓の管理費と維持費"}, {"id": 7, "title": "仏壇の選び方と費用"}, {"id": 8, "title": "位牌の種類と作り方"}, {"id": 9, "title": "お墓参りのマナーと作法"}, {"id": 10, "title": "デジタル仏壇・オンライン墓参とは"}] },
  { id: 'souzoku-col', label: '⚖️ 相続・手続き', articles: [{"id": 1, "title": "相続手続きの期限一覧【亡くなってからの流れ】"}, {"id": 2, "title": "相続税の申告が必要か確認する方法"}, {"id": 3, "title": "遺産分割協議書の書き方"}, {"id": 4, "title": "銀行口座の相続手続き"}, {"id": 5, "title": "不動産の相続登記 義務化と手続き"}, {"id": 6, "title": "相続放棄の手続きと期限"}, {"id": 7, "title": "準確定申告とは？期限と書き方"}, {"id": 8, "title": "デジタル遺産の整理方法"}, {"id": 9, "title": "相続税を節税する方法"}, {"id": 10, "title": "相続でもめやすいケースと対処法"}] },
  { id: 'shukatsu-col', label: '📝 終活・エンディング', articles: [{"id": 1, "title": "エンディングノートの書き方入門"}, {"id": 2, "title": "遺言書の種類と作り方"}, {"id": 3, "title": "終活でやるべきこと10選"}, {"id": 4, "title": "老後の住まいをどう考えるか"}, {"id": 5, "title": "介護の希望を家族に伝える方法"}, {"id": 6, "title": "延命治療・臓器提供の意思を残す方法"}, {"id": 7, "title": "不用品の生前整理・終活片付けの進め方"}, {"id": 8, "title": "ペットのための終活準備"}, {"id": 9, "title": "デジタル終活 パスワード管理の方法"}, {"id": 10, "title": "終活セミナー・無料相談の活用法"}] },
]

export default function ColumnIndex() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>葬儀・相続・終活コラム一覧</h1>
      <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 24 }}>全50記事・無料でお読みいただけます</p>
      {COLUMNS.map(cat => (
        <div key={cat.id} style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 15, fontWeight: 700, color: '#374151', marginBottom: 10, paddingBottom: 6, borderBottom: '0.5px solid #e5e7eb' }}>{cat.label}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {cat.articles.map(a => (
              <Link key={a.id} href={`/column/${cat.id}/${a.id}`}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '11px 14px', textDecoration: 'none' }}>
                <span style={{ fontSize: 11, color: '#9ca3af', flexShrink: 0, minWidth: 20 }}>{a.id}</span>
                <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{a.title}</span>
                <span style={{ fontSize: 12, color: '#d1d5db', marginLeft: 'auto', flexShrink: 0 }}>›</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <Link href="/" style={{ fontSize: 13, color: '#78716c', textDecoration: 'none' }}>診断を受ける →</Link>
      </div>
    </main>
  )
}
