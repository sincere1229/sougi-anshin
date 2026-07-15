import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: 'お墓タイプ診断 | やさしい葬儀ナビ',
  description: '10問・約3分。一般墓・樹木葬・納骨堂・散骨の違いと自分に合うお墓タイプがわかる。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="haka"
      title="お墓タイプ診断"
      subtitle="10問・約3分 | あなたに合うお墓の選び方がわかります"
      questionsCsvPath="/data/csv/questions_haka.csv"
      resultsCsvPath="/data/csv/result_haka.csv"
      nextDiagnoses={[
        { name: '葬儀スタイル診断', href: '/diagnosis/style' },
        { name: '葬儀費用シミュレーション', href: '/diagnosis/cost' },
        { name: '終活チェックリスト診断', href: '/diagnosis/shukatsu' },
        { name: '相続・手続き優先度診断', href: '/diagnosis/souzoku' },
      ]}
      recommendServices={[
        {
          name: '墓石ナビ（一括見積り）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6IDE+46CI+BYLJL',
          description: '',
          badge: '葬祭',
          forWho: '', notFor: '',
          imageUrl: 'https://www24.a8.net/svt/bgt?aid=260601699091&wid=003&eno=01&mid=s00000019485002009000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www15.a8.net/0.gif?a8mat=4B5LK3+1I6IDE+46CI+BYLJL',
        },
        {
          name: 'みんなの海洋散骨',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GE7K2+4P1A+5ZU29',
          description: '',
          badge: '葬祭',
          forWho: '', notFor: '',
          imageUrl: 'https://www21.a8.net/svt/bgt?aid=260601699088&wid=003&eno=01&mid=s00000021907001007000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www19.a8.net/0.gif?a8mat=4B5LK3+1GE7K2+4P1A+5ZU29',
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
        'ippan-haka': { feature: '先祖代々の墓を守り続けられる', reason: '後継者がいて管理できる環境・宗派へのこだわりが一般墓に向いています。墓石代・永代使用料で100〜300万円程度が目安です。', pitfall: '後継者がいなくなった場合、無縁墓になるリスクがあります。将来のことも含めて家族で話し合っておきましょう。', firstStep: 'まず菩提寺があれば住職に相談しましょう。なければ地域の霊園・石材店に見学を申し込んでみてください。' },
        'jumoku': { feature: '後継者不要・永代供養付きが多い', reason: '後継者の不安・自然への親しみ・費用を抑えたいというニーズが樹木葬に合っています。宗教不問の霊園が多いのも特徴です。', pitfall: '遺骨を他の方と合祀する「合祀型」は後から取り出せません。個別埋葬か合祀かを事前に確認しましょう。', firstStep: '「樹木葬 ○○（お住まいの地域）」で検索して、見学会に参加してみましょう。' },
        'nokotsudo': { feature: '屋内でいつでもお参りできる', reason: '管理の手間を省きたい・アクセスを重視・費用を抑えたいニーズが納骨堂に合っています。ロッカー型・仏壇型・自動搬送型（機械式）などがあります。', pitfall: '施設の経営状況を確認してください。倒産した納骨堂の遺骨が行き場を失うケースが近年ありました。', firstStep: '「納骨堂 ○○（お住まいの地域）」で検索して、複数施設を見学して比較しましょう。' },
        'sankotsu': { feature: '費用を最小限に抑えられる', reason: '後継者がいない・費用を抑えたい・自然への親しみというニーズが散骨・手元供養に合っています。散骨は海洋散骨が最も一般的です。', pitfall: '散骨は遺骨を粉末化する必要があります。また、全量散骨は後からお墓に移せないため、一部を手元に残す方も多いです。', firstStep: '散骨業者に「海洋散骨プラン」の資料請求をしてみましょう。手元供養は骨壺・アクセサリー型など種類が豊富です。' },
      }}
      roadmapByType={{
        'ippan-haka': { slug: 'haka-ippan', title: '一般墓 購入90日ロードマップ', description: '先祖代々受け継いできた従来型のお墓です。後継者がいて定期的に管理できる方に向いています。宗派・家のしきたりを守りながら供養したい方に最適です。' },
        'jumoku': { slug: 'haka-jumoku', title: '樹木葬 選び方90日ロードマップ', description: '墓石の代わりに樹木や花を墓標とする自然葬の一種です。後継者不要・永代供養付きが多く、自然の中で眠りたい方に人気があります。' },
        'nokotsudo': { slug: 'haka-nokotsudo', title: '納骨堂 選び方90日ロードマップ', description: '屋内施設に遺骨を安置する形式です。天候に関わらずお参りできる・アクセスが良い・費用が抑えられるという特徴があります。都市部で特に人気です。' },
        'sankotsu': { slug: 'haka-sankotsu', title: '散骨・手元供養 90日ロードマップ', description: '海や山に遺骨を撒く散骨、または自宅で遺骨を保管する手元供養は、お墓を持たない選択肢です。費用を最小限に抑えられます。' },
      }}
    />
  )
}
