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
          url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZN5U+36X8+1ZHAW1',
          description: '',
          badge: '遺品整理',
          forWho: '', notFor: '',
          imageUrl: 'https://www21.a8.net/svt/bgt?aid=260601699089&wid=003&eno=01&mid=s00000014894012006000&mc=1',
          imageWidth: 300,
          imageHeight: 250,
          impUrl: 'https://www19.a8.net/0.gif?a8mat=4B5LK3+1GZN5U+36X8+1ZHAW1',
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
      emotionMap={{
        'antei': { feature: '予算・保険・香典のバランスが取れている', reason: '収入・保険・香典のバランスが良好な状態です。事前に複数の葬儀社に見積もりを依頼して、総費用の全体像を把握しておきましょう。', pitfall: '「準備できている」と思っていても、当日の追加費用（搬送費・安置費・オプション）で想定より高くなることがあります。', firstStep: '複数の葬儀社に「概算見積もり」を依頼して比較しましょう。事前相談は無料です。' },
        'chuukan': { feature: '費用の内訳を把握することで削減できる', reason: '一部に費用リスクがあります。葬儀費用の平均は約120万円（全国平均）ですが、家族葬なら30〜80万円程度まで抑えることも可能です。', pitfall: '「安い葬儀社」だけで選ぶと、後からオプション追加で高くなるケースがあります。総額で比較しましょう。', firstStep: 'まず葬儀費用の「内訳一覧」を葬儀社に出してもらいましょう。何が含まれて何が別途なのかを確認することが第一歩です。' },
        'kiken': { feature: '葬祭扶助制度（生活保護世帯向け）が使える場合がある', reason: '費用面での準備が不足している状況です。葬祭扶助制度（生活保護受給者向け・最大21万円程度）や、直葬（5〜30万円）の活用を検討しましょう。', pitfall: '「お金がないから」と葬儀を諦める必要はありません。費用を抑えながらもきちんとお別れできる方法があります。', firstStep: 'まず市区町村の福祉窓口に「葬祭扶助制度」の条件を確認しましょう。次に「直葬プラン」を扱う葬儀社に相談を。' },
        'jizensodan': { feature: '事前相談は無料でできる', reason: '費用の見通しが立っていない状況です。葬儀社の事前相談は完全無料で、見積もりを出してもらっても契約の義務はありません。', pitfall: '「縁起が悪い」と思って事前相談を避ける方が多いですが、事前に備えておくことが家族への最大のプレゼントです。', firstStep: '近くの葬儀社に「事前相談・無料見積もり」を申し込みましょう。電話1本でOKです。' },
      }}
      roadmapByType={{
        'antei': { slug: 'cost-antei', title: '費用準備OK 葬儀計画90日ロードマップ', description: '予算・保険・香典収入のバランスが取れており、費用面で大きなリスクは低い状況です。ただし想定外の出費に備えて、見積もりを事前に確認しておきましょう。' },
        'chuukan': { slug: 'cost-chuukan', title: '費用見直し 葬儀計画90日ロードマップ', description: '予算・保険・香典収入のどれかに不安要素があります。葬儀費用の内訳を整理して、削減できる部分とそうでない部分を把握しておきましょう。' },
        'kiken': { slug: 'cost-kiken', title: '費用リスク高 緊急対策90日ロードマップ', description: '予算・保険・香典収入のいずれも厳しく、急な葬儀費用の支払いに困難が生じる可能性があります。今すぐ使える制度と費用を抑える方法を把握しておきましょう。' },
        'jizensodan': { slug: 'cost-jizensodan', title: '事前相談から始める90日ロードマップ', description: '費用の全体像がまだ見えていない状況です。亡くなってから考えるのではなく、今のうちに葬儀社に無料相談して概算を把握しておくことで、いざというときに慌てずに済みます。' },
      }}
    />
  )
}
