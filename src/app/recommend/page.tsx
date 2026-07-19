import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'しずくがえらんだサービス | やさしい葬儀ナビ',
  description: '終活サポーターしずくが厳選した、葬儀・電報・遺品整理・お墓・相続のサービス一覧。診断結果に合わせたおすすめも掲載。',
}

type ServiceItem = {
  name: string
  badge: string
  badgeColor: string
  desc: string
  point: string
  url: string
  tag: string
  impUrl?: string
}

type ServiceCategory = {
  category: string
  emoji: string
  color: string
  bgColor: string
  borderColor: string
  shizukuComment: string
  items: ServiceItem[]
}

const SERVICES: ServiceCategory[] = [
  {
    category: '葬儀・家族葬',
    emoji: '🕊️',
    color: '#5b3fa0',
    bgColor: '#f5f0ff',
    borderColor: '#d5b8f5',
    shizukuComment: '費用を抑えながら、家族だけで温かくお見送りできるプランです。',
    items: [
      {
        name: '家族葬のこれから',
        badge: '火葬プラン最安値',
        badgeColor: '#5b3fa0',
        desc: '火葬プランなら最安86,900円〜。シンプルで温かい家族葬が全国対応で可能。',
        point: '✓ 専門スタッフが24時間対応',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1FSQEQ+5PHI+5ZMCH',
        tag: '葬儀',
        impUrl: 'https://www18.a8.net/0.gif?a8mat=4B5LK3+1FSQEQ+5PHI+5ZMCH',
      },
    ],
  },
  {
    category: '電報・弔電',
    emoji: '✉️',
    color: '#b06000',
    bgColor: '#fff8f0',
    borderColor: '#f5d8a0',
    shizukuComment: '急いで弔電を手配したい方に。デザインも豊富で当日発送も対応しています。',
    items: [
      {
        name: 'VERY CARD',
        badge: '490文字まで無料',
        badgeColor: '#b06000',
        desc: '490文字までメッセージ無料。デザイン豊富で全国即日配達1,650円〜。',
        point: '✓ インターネットから簡単申込み',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1JYT6Q+32Q4+5ZU29',
        tag: '電報',
        impUrl: 'https://www12.a8.net/0.gif?a8mat=4B5LK3+1JYT6Q+32Q4+5ZU29',
      },
    ],
  },
  {
    category: '遺品整理',
    emoji: '🏠',
    color: '#1a6b3c',
    bgColor: '#f0faf5',
    borderColor: '#a8dfc0',
    shizukuComment: '一人で抱え込まないでください。プロにお任せすることも大切な選択です。',
    items: [
      {
        name: 'ライフリセット',
        badge: '全国対応',
        badgeColor: '#1a6b3c',
        desc: 'ご遺族様に代わり、旅立ちをお手伝いします。即日見積もり無料。',
        point: '✓ 遺品整理のプロが丁寧に対応',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GZN5U+36X8+1ZHAW1',
        tag: '遺品整理',
        impUrl: 'https://www19.a8.net/0.gif?a8mat=4B5LK3+1GZN5U+36X8+1ZHAW1',
      },
    ],
  },
  {
    category: 'お墓・供養',
    emoji: '🌿',
    color: '#2a6b2a',
    bgColor: '#f0faf0',
    borderColor: '#a8d8a8',
    shizukuComment: 'お墓は後悔しない選択を。費用・場所・形式を比較してから決めましょう。',
    items: [
      {
        name: '墓石ナビ',
        badge: '一括見積り無料',
        badgeColor: '#2a6b2a',
        desc: '利用者満足度98%。全国の優良石材店から一括見積り。平均37万円。',
        point: '✓ あなたに合った墓石が見つかる',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1I6IDE+46CI+BYLJL',
        tag: 'お墓',
        impUrl: 'https://www15.a8.net/0.gif?a8mat=4B5LK3+1I6IDE+46CI+BYLJL',
      },
      {
        name: 'みんなの海洋散骨',
        badge: '散骨・自然葬',
        badgeColor: '#1a5c8a',
        desc: '海洋散骨や遺骨の供養ならここ。自然に還る新しいお別れのかたち。',
        point: '✓ 費用を抑えた自然葬が可能',
        url: 'https://px.a8.net/svt/ejp?a8mat=4B5LK3+1GE7K2+4P1A+5ZU29',
        tag: '散骨',
        impUrl: 'https://www19.a8.net/0.gif?a8mat=4B5LK3+1GE7K2+4P1A+5ZU29',
      },
      {
        name: '墓じまいパートナーズ',
        badge: '改葬・墓じまい相談',
        badgeColor: '#8a5c1a',
        desc: '墓じまい・改葬手続きを専門業者へ相談できます。',
        point: '✓ お墓の撤去や改葬をまとめて相談したい方に。',
        url: 'https://af.moshimo.com/af/c/click?a_id=5676996&p_id=7496&pc_id=21651&pl_id=94106',
        tag: '墓じまい',
        impUrl: 'https://i.moshimo.com/af/i/impression?a_id=5676996&p_id=7496&pc_id=21651&pl_id=94106',
      },
    ],
  },
]

export default function RecommendPage() {
  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '0 0 60px' }}>

      {/* ヘッダー */}
      <div style={{
        background: 'linear-gradient(160deg, #f5f0ff, #ede8f8)',
        padding: '24px 16px 20px',
      }}>
        <Link href="/" style={{ fontSize: 12, color: '#9370db', textDecoration: 'none', display: 'block', marginBottom: 12 }}>
          ← やさしい葬儀ナビ
        </Link>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <div style={{
            width: 52, height: 52, borderRadius: '50%', overflow: 'hidden',
            flexShrink: 0, border: '2px solid #d5b8f5',
            position: 'relative',
          }}>
            <Image
              src="/images/characters/shizuku-smile.png"
              alt="しずく"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ fontSize: 11, color: '#9370db', fontWeight: 700, margin: '0 0 2px' }}>
              しずくがえらんだサービス
            </p>
            <h1 style={{ fontSize: 18, fontWeight: 800, color: '#2d1f4a', margin: 0, lineHeight: 1.3 }}>
              信頼できる専門サービス一覧
            </h1>
          </div>
        </div>

        {/* しずくのコメント */}
        <div style={{
          background: '#fff',
          borderRadius: 12,
          padding: '12px 14px',
          marginTop: 14,
          boxShadow: '0 1px 6px rgba(147,112,219,0.1)',
        }}>
          <p style={{ fontSize: 13, color: '#4a3060', lineHeight: 1.6, margin: 0 }}>
            私が実際に調べて、安心してご紹介できるサービスだけを集めました。どうぞ参考にしてください。
          </p>
        </div>

        <p style={{ fontSize: 10, color: '#b0a0c0', marginTop: 10, margin: '10px 0 0' }}>
          ※ 本ページはアフィリエイト広告を含みます
        </p>
      </div>

      {/* サービス一覧 */}
      <div style={{ padding: '20px 16px 0' }}>
        {SERVICES.map((sec, i) => (
          <div key={i} style={{ marginBottom: 28 }}>

            {/* カテゴリヘッダー */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              marginBottom: 10,
            }}>
              <span style={{ fontSize: 18 }}>{sec.emoji}</span>
              <h2 style={{ fontSize: 15, fontWeight: 700, color: '#2d1f4a', margin: 0 }}>
                {sec.category}
              </h2>
            </div>

            {/* しずくのひとこと */}
            <div style={{
              background: sec.bgColor,
              border: `1px solid ${sec.borderColor}`,
              borderRadius: '0 12px 12px 12px',
              padding: '10px 12px',
              marginBottom: 10,
              marginLeft: 8,
              display: 'flex',
              gap: 8,
              alignItems: 'center',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: '50%', overflow: 'hidden',
                flexShrink: 0, position: 'relative',
              }}>
                <Image
                  src="/images/characters/shizuku-care.png"
                  alt="しずく"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: 12, color: sec.color, lineHeight: 1.5, margin: 0 }}>
                {sec.shizukuComment}
              </p>
            </div>

            {/* サービスカード */}
            {sec.items.map((item, j) => (
              <div key={j}>
              <a href={item.url} target="_blank" rel="nofollow noopener noreferrer"
                style={{
                  display: 'block',
                  background: '#fff',
                  border: `1.5px solid ${sec.borderColor}`,
                  borderRadius: 14,
                  padding: '14px 16px',
                  marginBottom: 10,
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2937', flex: 1 }}>
                    {item.name}
                  </span>
                  <span style={{
                    fontSize: 10, fontWeight: 700,
                    background: sec.bgColor,
                    color: item.badgeColor,
                    borderRadius: 6, padding: '3px 8px',
                    flexShrink: 0, marginLeft: 8,
                    border: `1px solid ${sec.borderColor}`,
                  }}>
                    {item.badge}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: '0 0 8px' }}>
                  {item.desc}
                </p>
                <p style={{ fontSize: 12, color: sec.color, fontWeight: 600, margin: '0 0 10px' }}>
                  {item.point}
                </p>
                <div style={{
                  background: sec.color,
                  color: '#fff',
                  borderRadius: 8,
                  padding: '9px',
                  textAlign: 'center',
                  fontSize: 13,
                  fontWeight: 700,
                }}>
                  詳しく見てみる →
                </div>
              </a>
              {item.impUrl && (
                <img
                  src={item.impUrl}
                  width={1}
                  height={1}
                  style={{ border: 'none' }}
                  alt=""
                />
              )}
              </div>
            ))}
          </div>
        ))}

        {/* 診断CTAへ戻る */}
        <div style={{
          background: 'linear-gradient(135deg, #f5f0ff, #ede8f8)',
          border: '1px solid #d5b8f5',
          borderRadius: 14,
          padding: '16px',
          textAlign: 'center',
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#2d1f4a', marginBottom: 4 }}>
            あなたに合ったサービスを診断で絞り込む
          </p>
          <p style={{ fontSize: 12, color: '#7b5ea0', marginBottom: 12 }}>
            状況別の無料診断で最適なサービスが見つかります
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            background: '#5b3fa0',
            color: '#fff',
            borderRadius: 8, padding: '10px 24px',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>
            診断を受けてみる →
          </Link>
        </div>
      </div>
    </main>
  )
}
