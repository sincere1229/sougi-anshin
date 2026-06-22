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
          description: '利用者満足度98%。全国の優良石材店から一括見積り。平均37万円。',
          forWho: '', notFor: '',
          badge: 'お墓',
        },
        {
          name: 'みんなの海洋散骨',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GE60I+4P1A+5ZU29',
          description: '海洋散骨や遺骨の供養なら。自然に還る新しいお別れのかたち。',
          forWho: '', notFor: '',
          badge: '散骨',
        },
        {
          name: '家族葬のこれから',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1FSQEQ+5PHI+5ZMCH',
          description: '火葬プランなら最安86,900円〜。葬儀とセットで検討を。',
          forWho: '', notFor: '',
          badge: '葬儀',
        },
      ]}
    />
  )
}
