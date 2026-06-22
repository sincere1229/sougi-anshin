import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: 'お墓タイプ診断 | 葬儀ナビ',
  description: '10問・約3分。一般墓・樹木葬・納骨堂・散骨の中から家族に合うお墓のタイプがわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="haka"
      title="お墓タイプ診断"
      subtitle="10問・約3分 | 家族に合うお墓のタイプがわかります"
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
                "name": "墓石ナビ（墓石一括見積）",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6GTU+46CI+BYLJL",
                "description": "全国の墓石会社に一括見積もり。費用を比較できます。",
                "forWho": "",
                "notFor": "",
                "badge": "お墓"
        },
        {
                "name": "ライフリセット（遺品整理）",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1",
                "description": "墓じまい・改葬の際の遺品整理も対応。",
                "forWho": "",
                "notFor": "",
                "badge": "遺品整理"
        }
]}
    />
  )
}
