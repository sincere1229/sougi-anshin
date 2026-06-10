import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '葬儀スタイル診断 | 葬儀ナビ',
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
                "name": "ライフリセット（遺品整理）",
                "url": "https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX",
                "description": "遺品整理のプロが対応。全国対応・即日見積もり無料。",
                "forWho": "",
                "notFor": "",
                "badge": "遺品整理"
        },
        {
                "name": "VERY CARD（電報・弔電）",
                "url": "https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX",
                "description": "葬儀に届ける弔電。最短当日発送対応。",
                "forWho": "",
                "notFor": "",
                "badge": "電報"
        }
]}
    />
  )
}
