import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '葬儀スタイル診断 | やさしい葬儀ナビ',
  description: '10問・約3分。家族葬・一般葬・直葬・一日葬の中から家族に合う葬儀スタイルがわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="style"
      title="葬儀スタイル診断"
      subtitle="10問・約3分 | 家族に合う葬儀スタイルがわかります"
      questionsCsvPath="/data/csv/questions_style.csv"
      resultsCsvPath="/data/csv/result_style.csv"
      nextDiagnoses={[
        { name: '葬儀費用シミュレーション', href: '/diagnosis/cost' },
        { name: 'お墓タイプ診断', href: '/diagnosis/haka' },
        { name: '終活チェックリスト診断', href: '/diagnosis/shukatsu' },
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
          name: 'Cariru BLACK FORMAL（喪服レンタル）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B63GF+AFOL1E+1PO0+25FMXT',
          description: '',
          badge: 'ファッション',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260624895631&wid=003&eno=01&mid=s00000007992013006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www17.a8.net/0.gif?a8mat=4B63GF+AFOL1E+1PO0+25FMXT',
        },
        {
          name: 'Suit ya（オーダースーツ）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B63GF+AINRU2+3V8I+63WO1',
          description: '',
          badge: 'ファッション',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260624895636&wid=004&eno=01&mid=s00000018045001026000&mc=1',
          imageWidth: 300,
          imageHeight: 37,
          impUrl: 'https://www18.a8.net/0.gif?a8mat=4B63GF+AINRU2+3V8I+63WO1',
        },
        {
          name: 'VERY CARD（電報・弔電）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1JYRN6+32Q4+5ZU29',
          description: '',
          badge: '電報',
          forWho: '', notFor: '',
          imageUrl: 'https://www21.a8.net/svt/bgt?aid=260601699094&wid=001&eno=01&mid=s00000014350001007000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www16.a8.net/0.gif?a8mat=4B5LK3+1JYRN6+32Q4+5ZU29',
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
        'ippan': { feature: '多くの人が参列でき故人を偲べる', reason: '参列者が多く、故人の交友関係を大切にしたいというニーズが一般葬に適しています。費用は100〜300万円程度が目安です。', pitfall: '参列者が多いほど費用がかさみます。返礼品・料理・会場費の見積もりを複数社で比較しましょう。', firstStep: 'まず葬儀社に「一般葬の見積もり」を依頼しましょう。複数社に相見積もりを取ることをおすすめします。' },
        'kazoku': { feature: '家族だけでゆっくりお別れできる', reason: '参列者を絞って身内だけで送りたいというニーズが家族葬に合っています。費用は30〜100万円程度が目安です。', pitfall: '後日、参列できなかった知人から「なぜ呼ばれなかったか」と問われるケースがあります。事前に知らせる範囲を決めておきましょう。', firstStep: '葬儀社に「家族葬プラン」の見積もりを依頼してください。事前相談は無料です。' },
        'chokuso': { feature: '費用を最小限に抑えられる（5〜30万円）', reason: '費用を抑えたい・シンプルな形を希望するニーズが直葬に合っています。火葬のみのため最短半日程度で完了します。', pitfall: 'お別れの時間が非常に短くなります。後悔しないよう、火葬前に少し時間をとることをおすすめします。', firstStep: '直葬に対応している葬儀社を探しましょう。「直葬プラン」で検索すると見つかります。' },
        'ichi-nichi': { feature: '通夜がなく1日で完結する', reason: 'シンプルにしたいがお別れの場もきちんと設けたいというバランスのニーズに一日葬が合っています。', pitfall: '菩提寺によっては一日葬を認めない場合があります。お寺との関係がある場合は事前に確認しましょう。', firstStep: '菩提寺がある場合はまず住職に相談しましょう。ない場合は「一日葬プラン」を扱う葬儀社に相談を。' },
      }}
      roadmapByType={{
        'ippan': { slug: 'style-ippan', title: '一般葬の準備90日ロードマップ', description: '多くの方に故人を見送ってもらいたい方向けです。親族・知人・会社関係者など広く参列者を招いて、しっかりとお別れの場を設ける形式です。' },
        'kazoku': { slug: 'style-kazoku', title: '家族葬の準備90日ロードマップ', description: '家族や親しい方だけで静かに送る形式です。近年最も選ばれている葬儀スタイルで、ゆっくりお別れできると人気があります。' },
        'chokuso': { slug: 'style-chokuso', title: '直葬の準備90日ロードマップ', description: '通夜・告別式を省略し、火葬のみ行うシンプルな形式です。費用を最小限に抑えたい方、または故人の意志として選ばれることもあります。' },
        'ichi-nichi': { slug: 'style-ichinichi', title: '一日葬の準備90日ロードマップ', description: '通夜を省略して告別式と火葬を1日で行う形式です。家族葬と直葬の中間として近年増えています。参列者の負担も少なく、費用も抑えられます。' },
      }}
    />
  )
}
