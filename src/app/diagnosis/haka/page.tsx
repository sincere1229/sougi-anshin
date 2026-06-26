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
          name: 'みんなの海洋散骨',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GE60I+4P1A+5ZU29',
          description: '',
          badge: '葬祭',
          forWho: '', notFor: '',
          imageUrl: 'https://www20.a8.net/svt/bgt?aid=260601699088&wid=001&eno=01&mid=s00000021907001007000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www11.a8.net/0.gif?a8mat=4B5LK3+1GE60I+4P1A+5ZU29',
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
    />
  )
}
