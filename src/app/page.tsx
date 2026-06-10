import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '葬儀ナビ | 葬儀・相続・終活を無料診断でサポート',
  description: '突然の葬儀・相続・終活で迷っている方へ。5つの無料診断で葬儀スタイル・費用・お墓・終活・相続の手順がわかります。登録不要。',
}

const DIAGNOSES = [
  { id: 'style', emoji: '⛩️', title: '葬儀スタイル診断', desc: '家族葬・一般葬・直葬、家族に合うスタイルは？', time: '10問・約3分', color: '#78716c', href: '/diagnosis/style' },
  { id: 'cost', emoji: '💴', title: '葬儀費用シミュレーション', desc: '費用の目安と使える制度・備えがわかる', time: '10問・約3分', color: '#d4af6a', href: '/diagnosis/cost' },
  { id: 'haka', emoji: '🪨', title: 'お墓タイプ診断', desc: '一般墓・樹木葬・納骨堂・散骨の違いがわかる', time: '10問・約3分', color: '#16a34a', href: '/diagnosis/haka' },
  { id: 'shukatsu', emoji: '📝', title: '終活チェックリスト診断', desc: '終活の準備度を判定、今やるべきことが明確に', time: '10問・約3分', color: '#9333ea', href: '/diagnosis/shukatsu' },
  { id: 'souzoku', emoji: '⚖️', title: '相続・手続き優先度診断', desc: '亡くなった後の手続きの優先順位を判定', time: '10問・約3分', color: '#dc2626', href: '/diagnosis/souzoku' },
]

const COLUMNS = [
  { cat: 'hajimete', id: 1, title: '親が亡くなったら最初にすること' },
  { cat: 'hajimete', id: 2, title: '死亡届の書き方と提出方法' },
  { cat: 'sougi-col', id: 1, title: '家族葬とは？費用・流れ・注意点' },
  { cat: 'haka-col', id: 1, title: '樹木葬とは？費用・選び方・デメリット' },
  { cat: 'souzoku-col', id: 1, title: '相続手続きの期限一覧【亡くなってからの流れ】' },
  { cat: 'shukatsu-col', id: 1, title: 'エンディングノートの書き方入門' },
]

export default function Home() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '24px 16px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <p style={{ fontSize: 12, color: '#d4af6a', fontWeight: 600, marginBottom: 8, letterSpacing: '0.05em' }}>登録不要・完全無料</p>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: '#1c1917', lineHeight: 1.4, marginBottom: 12 }}>葬儀・相続・終活の不安を、<br />一緒に整理しましょう</h1>
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7 }}>突然の葬儀や相続で何から手をつければいいか<br />迷っているあなたへ。診断で次の一歩が見えます。</p>
      </div>

      <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 12 }}>5つの無料診断</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
        {DIAGNOSES.map(d => (
          <Link key={d.id} href={d.href} style={{ display: 'flex', gap: 14, background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '14px 16px', textDecoration: 'none', alignItems: 'center' }}>
            <div style={{ fontSize: 28, flexShrink: 0 }}>{}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', marginBottom: 3 }}>{}</div>
              <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 4 }}>{}</div>
              <div style={{ fontSize: 11, color: d.color, fontWeight: 600 }}>{}</div>
            </div>
            <div style={{ fontSize: 16, color: '#d1d5db', flexShrink: 0 }}>›</div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151' }}>コラム</h2>
        <Link href="/column" style={{ fontSize: 12, color: '#78716c', textDecoration: 'none' }}>一覧を見る →</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        {COLUMNS.map((c, i) => (
          <Link key={i} href={`/column/${c.cat}/${c.id}`}
            style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', textDecoration: 'none' }}>
            <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{}</span>
          </Link>
        ))}
      </div>

      <div style={{ background: '#faf9f7', border: '0.5px solid #e7e5e4', borderRadius: 12, padding: '16px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: '#44403c', marginBottom: 6 }}>おすすめサービス一覧</p>
        <p style={{ fontSize: 12, color: '#78716c', marginBottom: 10 }}>葬儀社・電報・遺品整理・墓石をまとめました</p>
        <Link href="/recommend" style={{ display: 'inline-block', background: '#1c1917', color: '#d4af6a', borderRadius: 8, padding: '8px 20px', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>見てみる</Link>
      </div>
    </main>
  )
}
