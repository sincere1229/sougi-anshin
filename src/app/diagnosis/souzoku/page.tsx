import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '相続・手続き優先度診断 | やさしい葬儀ナビ',
  description: '10問・約3分。亡くなった後の手続きの優先順位を判定する無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="souzoku"
      title="相続・手続き優先度診断"
      subtitle="10問・約3分 | 手続きの優先順位と進め方がわかります"
      questionsCsvPath="/data/csv/questions_souzoku.csv"
      resultsCsvPath="/data/csv/result_souzoku.csv"
      nextDiagnoses={[
        { name: '葬儀スタイル診断', href: '/diagnosis/style' },
        { name: '葬儀費用シミュレーション', href: '/diagnosis/cost' },
        { name: 'お墓タイプ診断', href: '/diagnosis/haka' },
        { name: '終活チェックリスト診断', href: '/diagnosis/shukatsu' },
      ]}
      recommendServices={[
        {
          name: 'ライフリセット（遺品整理）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1',
          description: '',
          badge: '遺品整理',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260601699089&wid=001&eno=01&mid=s00000014894012006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www10.a8.net/0.gif?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1',
        },
        {
          name: '家族葬のこれから',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1FSQEQ+5PHI+5ZMCH',
          description: '',
          badge: '葬祭',
          forWho: '', notFor: '',
          imageUrl: 'https://www27.a8.net/svt/bgt?aid=260601699087&wid=001&eno=01&mid=s00000026631001006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www12.a8.net/0.gif?a8mat=4B5LK3+1FSQEQ+5PHI+5ZMCH',
        },
        {
          name: '墓石ナビ（一括見積り）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6GTU+46CI+BYLJL',
          description: '',
          badge: '葬祭',
          forWho: '', notFor: '',
          imageUrl: 'https://www28.a8.net/svt/bgt?aid=260601699091&wid=001&eno=01&mid=s00000019485002009000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www15.a8.net/0.gif?a8mat=4B5LK3+1I6GTU+46CI+BYLJL',
        },
        {
          name: '相続アシスト',
          url: 'https://af.moshimo.com/af/c/click?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
          description: '相続の手間も不安も、まるごとゼロに。専門家チームによるゼロタッチ相続税申告。',
          badge: '相続',
          forWho: '', notFor: '',
          imageUrl: 'https://image.moshimo.com/af-img/3982/000000093281.png',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5647169&p_id=7301&pc_id=20977&pl_id=93281',
        },
      ]}
      emotionMap={{
        'sokuza': { feature: '死亡届は7日以内の提出が必要', reason: '亡くなって間もない状況で、緊急度の高い手続きが残っています。死亡届（7日以内）・年金停止（14日以内）・健康保険（14日以内）は特に急ぎましょう。', pitfall: '悲しみの中での手続きは心身ともに大変です。役所の窓口で「何をすればいいか」と聞けば一覧を教えてもらえます。', firstStep: 'まず市区町村役所に「死亡後の手続き一覧」をもらいに行きましょう。「おくやみ窓口」がある自治体も増えています。' },
        'chukikan': { feature: '相続放棄は3ヶ月以内', reason: '緊急手続きは済んでいますが、相続の中核となる手続きが残っています。特に相続放棄を考えている場合は3ヶ月以内という期限があります。', pitfall: '相続人同士の感情的なもつれが手続きを長引かせることがあります。専門家（弁護士・税理士）を間に入れると円滑に進みます。', firstStep: 'まず相続人全員で「遺産分割協議」の日程を決めましょう。話し合いが難しい場合は弁護士に相談を。' },
        'senmonka': { feature: '税理士：相続税申告・財産評価', reason: '専門家が必要な手続きが残っている状況です。相続税の申告期限は、原則として相続の開始があったことを知った日の翌日から10か月以内です。相続税は、正味の遺産額が基礎控除額（3,000万円＋600万円×法定相続人の数）を超える場合に申告が必要です。', pitfall: '「専門家に頼むとお金がかかる」という思い込みがありますが、間違った申告で余計な税を払う方が損です。', firstStep: 'まず税理士に「相続税の申告が必要かどうか」だけでも無料相談してみましょう。' },
        'junbi': { feature: '遺言書で家族のもめごとを防げる', reason: '事前準備が整っている状況です。環境の変化（財産の増減・家族構成の変化）があったときは遺言書・財産一覧を更新しましょう。', pitfall: '遺言書の種類と保管方法を混同しないよう注意が必要です。自筆証書遺言は法務局の保管制度を利用でき、公正証書遺言の原本は公証役場で保管されます。家族には遺言書を作成したことや確認方法を共有しておくと安心です。', firstStep: '年1回、財産一覧と遺言書の内容を見直す習慣をつけましょう。' },
      }}
      roadmapByType={{
        'sokuza': { slug: 'souzoku-sokuza', title: '緊急手続き90日ロードマップ', description: '亡くなった直後は期限のある手続きが集中します。死亡届・健康保険・年金・銀行など、期限を過ぎると罰則や不利益が生じるものがあります。' },
        'chukikan': { slug: 'souzoku-chukikan', title: '1〜3ヶ月手続き90日ロードマップ', description: '緊急手続きは済んでいますが、相続手続きの本番はこれからです。遺産分割・不動産登記・相続税申告（必要な場合）などは期限があります。' },
        'senmonka': { slug: 'souzoku-senmonka', title: '専門家活用90日ロードマップ', description: '相続税の申告・不動産の名義変更・遺産分割協議など、専門知識が必要な手続きが残っています。税理士・司法書士・弁護士に相談することで、ミスや損失を防げます。' },
        'junbi': { slug: 'souzoku-junbi', title: '相続事前準備90日ロードマップ', description: 'まだ相続は発生していませんが、準備が整っています。定期的に財産状況・遺言書の内容を見直して、家族に共有しておきましょう。' },
      }}
    />
  )
}
