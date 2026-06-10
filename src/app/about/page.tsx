import type { Metadata } from 'next'
export const metadata: Metadata = { title: '運営者情報 | 葬儀ナビ' }
export default function About() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>運営者情報</h1>
      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
        <p><strong>サイト名：</strong>葬儀ナビ</p>
        <p><strong>URL：</strong>https://sougi-anshin.net</p>
        <p><strong>運営者：</strong>Twinkle Lab（ぴよ子）</p>
        <p style={{ marginTop: 12, fontSize: 13, color: '#6b7280' }}>本サイトはアフィリエイト広告（A8.net・Amazon Associates・楽天アフィリエイト）を利用しています。</p>
      </div>
    </main>
  )
}
