import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'おすすめサービス一覧 | 葬儀ナビ' }
const SERVICES = [
  { category: '⛩️ 葬儀・電報', items: [
    { name: 'VERY CARD（電報・弔電）', desc: '葬儀に届ける弔電。最短当日発送。供花・花輪も対応。', badge: '電報', url: 'https://px.a8.net/svt/ejp?a8mat=1JYRN6+32Q4+691UQ+XXXXXX' },
  ]},
  { category: '🏠 遺品整理', items: [
    { name: 'ライフリセット（遺品整理）', desc: '遺品整理のプロが対応。全国対応・即日見積もり無料。', badge: '遺品整理', url: 'https://px.a8.net/svt/ejp?a8mat=1GZLMA+36X8+1ZGG0Y+XXXXXX' },
  ]},
  { category: '🪨 お墓', items: [
    { name: '墓石ナビ（墓石一括見積）', desc: '全国の墓石会社に一括見積もりを依頼できます。', badge: 'お墓', url: 'https://px.a8.net/svt/ejp?a8mat=1I6GTU+46CI+BX3J6+XXXXXX' },
  ]},
]
export default function RecommendPage() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', marginBottom: 4 }}>おすすめサービス一覧</h1>
      <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 20 }}>※ 本ページはアフィリエイト広告を含みます</p>
      {SERVICES.map((sec, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 10 }}>{sec.category}</h2>
          {sec.items.map((item, j) => (
            <a key={j} href={item.url} target="_blank" rel="nofollow noopener noreferrer"
              style={{ display: 'block', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '12px 14px', marginBottom: 8, textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{item.name}</span>
                <span style={{ fontSize: 10, background: '#faf9f7', color: '#78716c', borderRadius: 4, padding: '2px 6px' }}>{item.badge}</span>
              </div>
              <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{item.desc}</p>
            </a>
          ))}
        </div>
      ))}
    </main>
  )
}
