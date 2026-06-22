import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '相続・手続き優先度診断 | 葬儀ナビ',
  description: '10問・約3分。亡くなった後の手続きの優先順位と期限がわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="souzoku"
      title="相続・手続き優先度診断"
      subtitle="10問・約3分 | 今やるべき手続きの優先順位がわかります"
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
                "name": "ライフリセット（遺品整理）",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1",
                "description": "相続後の遺品整理はプロに任せましょう。全国対応。",
                "forWho": "",
                "notFor": "",
                "badge": "遺品整理"
        },
        {
                "name": "墓石ナビ（墓石一括見積）",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6GTU+46CI+BYLJL",
                "description": "相続と合わせてお墓の準備も一括見積もりで。",
                "forWho": "",
                "notFor": "",
                "badge": "お墓"
        }
]}
    />
  )
}
