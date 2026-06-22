import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'やさしい葬儀ナビ | 葬儀・相続・終活を無料診断でサポート',
  description: '突然の葬儀・相続・終活で迷っている方へ。終活サポーターしずくが、5つの無料診断であなたに合った選択肢をご提案します。登録不要。',
}

const SITUATIONS = [
  { id: 'style',    emoji: '🕊️', label: '急いで葬儀を手配したい',      desc: '葬儀スタイルを診断',      href: '/diagnosis/style' },
  { id: 'cost',     emoji: '💴', label: '費用が心配・予算を知りたい',   desc: '葬儀費用シミュレーション', href: '/diagnosis/cost' },
  { id: 'haka',     emoji: '🌿', label: 'お墓や供養の方法を考えたい',   desc: 'お墓タイプ診断',          href: '/diagnosis/haka' },
  { id: 'shukatsu', emoji: '📝', label: '自分の終活を始めたい',         desc: '終活チェックリスト診断',  href: '/diagnosis/shukatsu' },
  { id: 'souzoku',  emoji: '⚖️', label: '相続・手続きを進めたい',       desc: '相続・手続き優先度診断',  href: '/diagnosis/souzoku' },
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
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 60px' }}>

      {/* ヒーローエリア：しずく登場 */}
      <div style={{
        background: 'linear-gradient(160deg, #f5f0ff 0%, #ede8f8 60%, #e8e0f5 100%)',
        padding: '32px 20px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* サイト名 */}
        <div style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 11, color: '#9370db', fontWeight: 700, letterSpacing: '0.12em', marginBottom: 4 }}>
            🕊️ やさしい葬儀ナビ
          </p>
          <p style={{ fontSize: 12, color: '#a08cb0', margin: 0 }}>
            登録不要・完全無料
          </p>
        </div>

        {/* しずくの吹き出しセリフ */}
        <div style={{
          background: '#fff',
          borderRadius: 16,
          padding: '14px 18px',
          marginBottom: 20,
          boxShadow: '0 2px 12px rgba(147,112,219,0.12)',
          position: 'relative',
          textAlign: 'left',
        }}>
          <div style={{
            position: 'absolute', bottom: -10, left: '50%', transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid #fff',
          }} />
          <p style={{ fontSize: 15, fontWeight: 700, color: '#3d2a6e', lineHeight: 1.6, margin: '0 0 4px' }}>
            突然のことで、大変でしたね。
          </p>
          <p style={{ fontSize: 13, color: '#6b5b8e', lineHeight: 1.6, margin: 0 }}>
            今どんな状況か教えていただけますか？<br />
            あなたに合った情報をご案内します。
          </p>
        </div>

        {/* しずく画像 */}
        <div style={{ position: 'relative', height: 260, marginBottom: -10 }}>
          <Image
            src="/images/characters/shizuku-main.png"
            alt="終活サポーター しずく"
            fill
            style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
            priority
          />
        </div>

        {/* キャラ名 */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(255,255,255,0.8)',
          borderRadius: 20, padding: '4px 14px',
          marginBottom: 24,
        }}>
          <span style={{ fontSize: 11, color: '#9370db' }}>終活サポーター</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#5b3fa0' }}>しずく</span>
        </div>
      </div>

      {/* 状況選択 */}
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
        }}>
          {/* しずくアイコン */}
          <div style={{
            width: 36, height: 36, borderRadius: '50%', overflow: 'hidden',
            flexShrink: 0, border: '2px solid #e8d5ff',
            position: 'relative',
          }}>
            <Image
              src="/images/characters/shizuku-smile.png"
              alt="しずく"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div style={{
            background: '#f5f0ff',
            borderRadius: '0 12px 12px 12px',
            padding: '10px 14px',
            flex: 1,
          }}>
            <p style={{ fontSize: 13, color: '#4a3060', fontWeight: 600, margin: 0 }}>
              今のご状況を教えてください
            </p>
          </div>
        </div>

        {/* 状況ボタン */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
          {SITUATIONS.map(s => (
            <Link key={s.id} href={s.href} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              background: '#fff',
              border: '1.5px solid #e8d5ff',
              borderRadius: 14,
              padding: '14px 16px',
              textDecoration: 'none',
              transition: 'all 0.2s',
              boxShadow: '0 1px 4px rgba(147,112,219,0.08)',
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#2d1f4a', marginBottom: 2 }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 11, color: '#9370db', fontWeight: 600 }}>
                  → {s.desc}
                </div>
              </div>
              <span style={{ fontSize: 18, color: '#c4a8e8', flexShrink: 0 }}>›</span>
            </Link>
          ))}
        </div>

        {/* しずくのひとこと */}
        <div style={{
          background: 'linear-gradient(135deg, #f8f4ff, #f0eaff)',
          border: '1px solid #e0d0f5',
          borderRadius: 14,
          padding: '16px',
          marginBottom: 28,
          display: 'flex',
          gap: 12,
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%', overflow: 'hidden',
            flexShrink: 0, border: '2px solid #d5b8f5',
            position: 'relative',
          }}>
            <Image
              src="/images/characters/shizuku-care.png"
              alt="しずく"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#9370db', fontWeight: 700, margin: '0 0 4px' }}>
              しずくより
            </p>
            <p style={{ fontSize: 13, color: '#4a3060', lineHeight: 1.7, margin: 0 }}>
              葬儀のこと、費用のこと、わからなくて当然です。どんな小さなことでも、まずは診断から始めてみてくださいね。
            </p>
          </div>
        </div>

        {/* コラム */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: '#2d1f4a', margin: 0 }}>
            📖 お役立ちコラム
          </h2>
          <Link href="/column" style={{ fontSize: 12, color: '#9370db', textDecoration: 'none' }}>
            一覧を見る →
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
          {COLUMNS.map((c, i) => (
            <Link key={i} href={`/column/${c.cat}/${c.id}`}
              style={{
                display: 'block', background: '#fff',
                border: '0.5px solid #e8d5ff',
                borderRadius: 10, padding: '12px 14px',
                textDecoration: 'none',
              }}>
              <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>
                {c.title}
              </span>
            </Link>
          ))}
        </div>

        {/* おすすめサービスへのCTA */}
        <div style={{
          background: '#2d1f4a',
          borderRadius: 14,
          padding: '18px 16px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#e8d5ff', marginBottom: 4 }}>
            しずくがえらんだ信頼できるサービス
          </p>
          <p style={{ fontSize: 11, color: '#a08cb0', marginBottom: 12 }}>
            葬儀社・電報・遺品整理・お墓をまとめました
          </p>
          <Link href="/recommend" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9370db, #7b52c8)',
            color: '#fff',
            borderRadius: 8, padding: '10px 24px',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>
            サービスを見てみる →
          </Link>
        </div>
      </div>
    </main>
  )
}
