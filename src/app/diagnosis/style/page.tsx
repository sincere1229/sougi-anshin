import type { Metadata } from 'next'
import DiagnosisShell from '@/components/DiagnosisShell'
export const metadata: Metadata = {
  title: '葬儀スタイル診断 | やさしい葬儀ナビ',
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
          name: 'Cariru BLACK FORMAL（喪服レンタル）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B63GF+AFOL1E+1PO0+25FMXT',
          description: '',
          badge: 'ファッション',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260624895631&wid=003&eno=01&mid=s00000007992013006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www17.a8.net/0.gif?a8mat=4B63GF+AFOL1E+1PO0+25FMXT',
        },
        {
          name: 'Suit ya（オーダースーツ）',
          url: 'https://px.a8.net/svt/ejp?a8mat=4B63GF+AINRU2+3V8I+63WO1',
          description: '',
          badge: 'ファッション',
          forWho: '', notFor: '',
          imageUrl: 'https://www23.a8.net/svt/bgt?aid=260624895636&wid=004&eno=01&mid=s00000018045001026000&mc=1',
          imageWidth: 300,
          imageHeight: 37,
          impUrl: 'https://www18.a8.net/0.gif?a8mat=4B63GF+AINRU2+3V8I+63WO1',
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
