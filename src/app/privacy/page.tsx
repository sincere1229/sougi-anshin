import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'プライバシーポリシー | 葬儀ナビ' }
export default function Privacy() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '24px 16px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>プライバシーポリシー</h1>
      <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', fontSize: 14, lineHeight: 1.8, color: '#374151' }}>
        <p>本サイトは個人情報の取得を行っていません。診断はすべてブラウザ内で完結し、回答データはサーバーに送信・保存されません。</p>
        <p style={{ marginTop: 10 }}>Googleアナリティクスによるアクセス解析を利用しています。</p>
        <p style={{ marginTop: 10 }}>アフィリエイトリンク（A8.net・Amazon・楽天）をクリックした場合、Cookieにより行動が追跡される場合があります。</p>
      </div>
    </main>
  )
}
