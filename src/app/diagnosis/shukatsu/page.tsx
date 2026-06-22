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
          description: '終活の一環として葬儀プランを事前に確認しておきましょう。',
          forWho: '', notFor: '',
          badge: '事前準備',
        },
        {
          name: '墓石ナビ（一括見積り）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6GTU+46CI+BYLJL',
          description: 'お墓の費用は終活で早めに比較検討を。一括見積り無料。',
          forWho: '', notFor: '',
          badge: 'お墓',
        },
        {
          name: 'VERY CARD（電報・弔電）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1JYRN6+32Q4+5ZU29',
          description: '弔電サービスの把握も終活の準備のひとつです。',
          forWho: '', notFor: '',
          badge: '電報',
        },
      ]}
    />
  )
}
