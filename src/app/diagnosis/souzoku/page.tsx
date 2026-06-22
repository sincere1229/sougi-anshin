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
          description: '相続手続きと並行して遺品整理もプロに依頼できます。全国対応。',
          forWho: '', notFor: '',
          badge: '遺品整理',
        },
        {
          name: '家族葬のこれから',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1FSQEQ+5PHI+5ZMCH',
          description: '葬儀がまだの方は費用を抑えたプランも確認しておきましょう。',
          forWho: '', notFor: '',
          badge: '葬儀',
        },
        {
          name: '墓石ナビ（一括見積り）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6GTU+46CI+BYLJL',
          description: 'お墓の手続きも相続と合わせて検討を。一括見積り無料。',
          forWho: '', notFor: '',
          badge: 'お墓',
        },
      ]}
    />
  )
}
