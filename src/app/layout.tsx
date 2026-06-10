import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '葬儀ナビ | 葬儀・相続・終活を無料診断でサポート',
  description: '突然の葬儀・相続・終活で何から始めればいいかわからない方へ。登録不要・無料の5つの診断で、あなたに合った葬儀スタイル・費用・お墓・終活・相続の手順がわかります。',
  openGraph: {
    title: '葬儀ナビ',
    description: '葬儀・相続・終活の不安を無料診断で整理。',
    url: 'https://sougi-anshin.net',
    siteName: '葬儀ナビ',
    locale: 'ja_JP',
    type: 'website',
  },
}

const FOOTER_LINKS = [
  { href: '/about', label: '運営者情報' },
  { href: '/privacy', label: 'プライバシーポリシー' },
  { href: '/column', label: 'コラム一覧' },
  { href: '/recommend', label: 'おすすめサービス' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header style={{ background: '#1c1917', borderBottom: '0.5px solid #44403c', padding: '12px 16px', position: 'sticky', top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 480, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <a href="/" style={{ fontSize: 16, fontWeight: 700, color: '#d4af6a', textDecoration: 'none' }}>⛩️ 葬儀ナビ</a>
            <a href="/column" style={{ fontSize: 12, color: '#a8a29e', textDecoration: 'none' }}>コラム</a>
          </div>
        </header>
        {children}
        <footer style={{ background: '#1c1917', borderTop: '0.5px solid #44403c', padding: '24px 16px', marginTop: 40 }}>
          <div style={{ maxWidth: 480, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', marginBottom: 12, justifyContent: 'center' }}>
              {FOOTER_LINKS.map(l => (
                <a key={l.href} href={l.href} style={{ fontSize: 12, color: '#78716c', textDecoration: 'none' }}>{l.label}</a>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: 11, color: '#57534e' }}>© 2025 葬儀ナビ · 本サイトはアフィリエイト広告を含みます</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
