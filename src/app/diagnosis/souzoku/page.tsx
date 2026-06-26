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
    />
  )
}
