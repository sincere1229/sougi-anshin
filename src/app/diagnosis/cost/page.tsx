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
          description: '火葬プランなら最安86,900円〜。費用を抑えた葬儀が全国対応。',
          forWho: '', notFor: '',
          badge: '費用重視',
        },
        {
          name: 'ライフリセット（遺品整理）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1',
          description: '遺品整理のプロが対応。全国対応・即日見積もり無料。',
          forWho: '', notFor: '',
          badge: '遺品整理',
        },
        {
          name: 'VERY CARD（電報・弔電）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1JYRN6+32Q4+5ZU29',
          description: '葬儀に届ける弔電。490文字まで無料・最短当日発送対応。',
          forWho: '', notFor: '',
          badge: '電報',
        },
      ]}
    />
  )
}
