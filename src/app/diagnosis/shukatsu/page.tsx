import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '終活チェックリスト診断 | やさしい葬儀ナビ',
  description: '10問・約3分。終活の準備度を判定し、今やるべきことが明確になる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="shukatsu"
      title="終活チェックリスト診断"
      subtitle="10問・約3分 | 終活の準備度と今やるべきことがわかります"
      questionsCsvPath="/data/csv/questions_shukatsu.csv"
      resultsCsvPath="/data/csv/result_shukatsu.csv"
      nextDiagnoses={[
        { name: '葬儀スタイル診断', href: '/diagnosis/style' },
        { name: '葬儀費用シミュレーション', href: '/diagnosis/cost' },
        { name: 'お墓タイプ診断', href: '/diagnosis/haka' },
        { name: '相続・手続き優先度診断', href: '/diagnosis/souzoku' },
      ]}
      recommendServices={[
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
          name: 'VERY CARD（電報・弔電）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1JYT6Q+32Q4+5ZU29',
          description: '',
          badge: '電報',
          forWho: '', notFor: '',
          imageUrl: 'https://www29.a8.net/svt/bgt?aid=260601699094&wid=003&eno=01&mid=s00000014350001007000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www12.a8.net/0.gif?a8mat=4B5LK3+1JYT6Q+32Q4+5ZU29',
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
        'junbi-ok': { feature: '家族が困らない準備ができている', reason: '終活の主要項目が整っている状況です。遺言書の内容は環境変化（離婚・財産変動など）で見直しが必要な場合があります。年1回の確認をおすすめします。', pitfall: '「書いたから大丈夫」と安心しがちですが、保管場所を家族が知らないと意味がありません。保管場所の共有も忘れずに。', firstStep: '年1回、誕生日などを機に遺言書・エンディングノートの内容を見直しましょう。' },
        'chuukan': { feature: '始めているものがある', reason: '一部の項目は着手できていますが、未完了のものが残っています。特に「家族への共有」「デジタル資産の整理」が後回しになりがちです。', pitfall: '完璧を目指すと進まなくなります。まず「エンディングノートを1ページだけ書く」くらいの気軽さで始めましょう。', firstStep: 'まずエンディングノートを1冊購入して、今日1項目だけ書いてみましょう。' },
        'mikaijin': { feature: '今日から始められる', reason: '終活がほとんど手つかずの状態です。しかし「終活」は死の準備ではなく、残りの人生をより豊かにするためのものです。怖がらずに始めましょう。', pitfall: '「縁起が悪い」という思い込みが一番の障害です。終活は家族への最高のプレゼントです。', firstStep: '今日、エンディングノートを1冊購入することから始めましょう。書店・100円ショップでも手に入ります。' },
        'kinkyuu': { feature: '今すぐできることがある', reason: '整っていない項目が多く、急な事態が起きた場合に家族が大変困る可能性があります。特に遺言書・財産一覧・延命治療の意思は早急に整えることをおすすめします。', pitfall: '「後でやろう」が一番のリスクです。健康なうちにしかできないことがあります（公正証書遺言は判断能力が必要）。', firstStep: 'まず司法書士か行政書士に「遺言書作成の相談」を申し込みましょう。多くの事務所で初回無料相談を行っています。' },
      }}
      roadmapByType={{
        'junbi-ok': { slug: 'shukatsu-ok', title: '終活メンテナンス90日ロードマップ', description: '遺言・財産・葬儀希望・医療方針など、主要な終活項目が整っています。定期的に内容を見直しながら、家族と情報を共有し続けることが大切です。' },
        'chuukan': { slug: 'shukatsu-chuukan', title: '終活ステップアップ90日ロードマップ', description: '一部の終活は始められていますが、まだ整っていない項目があります。全部を一度にやる必要はありません。優先度の高いものから少しずつ進めましょう。' },
        'mikaijin': { slug: 'shukatsu-mikaijin', title: '終活スタート90日ロードマップ', description: 'まだ終活に手をつけていない状態ですが、始めるのに遅すぎることはありません。まず家族に「もしものときの話」を切り出すことから始めましょう。' },
        'kinkyuu': { slug: 'shukatsu-kinkyuu', title: '終活緊急整備90日ロードマップ', description: '財産・遺言・医療方針など、整っていない項目が多い状態です。急な事態が起きたとき家族が困らないよう、今すぐ優先度の高い項目から取り組みましょう。' },
      }}
    />
  )
}
