import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '葬儀費用シミュレーション診断 | 葬儀ナビ',
  description: '10問・約3分。予算・保険・香典から葬儀費用の目安と使える制度がわかる無料診断。',
}
export default function Page() {
  return (
    <DiagnosisShell
      diagnosisId="cost"
      title="葬儀費用シミュレーション診断"
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
                "name": "ライフリセット（遺品整理）",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZLMA+36X8+1ZHAW1",
                "description": "葬儀後の遺品整理もまとめてお任せ。全国対応。",
                "forWho": "",
                "notFor": "",
                "badge": "遺品整理"
        },
        {
                "name": "墓石ナビ（墓石一括見積）",
                "url": "https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6GTU+46CI+BYLJL",
                "description": "全国の墓石会社に一括見積もり。費用を比較できます。",
                "forWho": "",
                "notFor": "",
                "badge": "お墓"
        }
]}
    />
  )
}
