import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '葬儀費用シミュレーション | やさしい葬儀ナビ',
  description: '10問・約3分。葬儀費用の目安と使える制度・備えがわかる無料シミュレーション。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="cost"
      title="葬儀費用シミュレーション"
      subtitle="10問・約3分 | 費用の目安と使える制度がわかります"
      questionsCsvPath="/data/csv/questions_cost.csv"
      resultsCsvPath="/data/csv/result_cost.csv"
      nextDiagnoses={[
        { name: '葬儀スタイル診断', href: '/diagnosis/style' },
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
