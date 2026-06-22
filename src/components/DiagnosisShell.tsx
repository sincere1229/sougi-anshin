'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Papa from 'papaparse'
import type { Question, ResultTemplate, RecommendService, RoadmapInfo } from '@/types/diagnosis'

interface Props {
  diagnosisId: string
  title: string
  subtitle: string
  questionsCsvPath: string
  resultsCsvPath: string
  nextDiagnoses: { name: string; href: string }[]
  recommendServices?: RecommendService[]
  roadmapByType?: Record<string, RoadmapInfo>
  emotionMap?: Record<string, { feature: string; reason: string; pitfall: string; firstStep: string }>
}

// 質問番号に応じてしずくの表情を切り替え
function getShizukuImage(current: number, total: number): string {
  if (current === 0) return '/images/characters/shizuku-smile.png'
  if (current >= total - 2) return '/images/characters/shizuku-care.png'
  return current % 2 === 0
    ? '/images/characters/shizuku-smile.png'
    : '/images/characters/shizuku-care.png'
}

// 質問番号に応じたしずくのセリフ
function getShizukuMessage(current: number, total: number, question: string): string {
  if (current === 0) return 'まず最初の質問です。気軽に答えてくださいね。'
  if (current === Math.floor(total / 2)) return 'もう半分です。あと少しで結果が出ます。'
  if (current >= total - 1) return '最後の質問です。もう少しで結果が出ますよ。'
  return 'ゆっくりで大丈夫です。あなたの状況を教えてください。'
}

export default function DiagnosisShell({
  diagnosisId, title, subtitle, questionsCsvPath, resultsCsvPath,
  nextDiagnoses, recommendServices = [], roadmapByType = {}, emotionMap = {}
}: Props) {
  const [questions, setQuestions] = useState<Question[]>([])
  const [results, setResults] = useState<ResultTemplate[]>([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<ResultTemplate | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch(questionsCsvPath).then(r => r.text()),
      fetch(resultsCsvPath).then(r => r.text()),
    ]).then(([qText, rText]) => {
      const q = Papa.parse<Question>(qText, { header: true, skipEmptyLines: true })
      const r = Papa.parse<ResultTemplate>(rText, { header: true, skipEmptyLines: true })
      setQuestions(q.data)
      setResults(r.data)
      setLoading(false)
    })
  }, [questionsCsvPath, resultsCsvPath])

  const choose = (score: string) => {
    const next = [...answers, score]
    if (current + 1 < questions.length) {
      setAnswers(next)
      setCurrent(c => c + 1)
    } else {
      const counts: Record<string, number> = {}
      next.forEach(s => { counts[s] = (counts[s] || 0) + 1 })
      const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
      const typeMap: Record<string, string> = {
        'A': results[0]?.type, 'B': results[1]?.type, 'C': results[2]?.type, 'D': results[3]?.type
      }
      const matched = results.find(r => r.type === typeMap[topType]) || results[0]
      setResult(matched)
    }
  }

  const reset = () => { setCurrent(0); setAnswers([]); setResult(null) }

  const share = () => {
    if (!result) return
    const text = `【葬儀ナビ診断結果】${result.emoji}${result.label}\n${result.headline}\nhttps://sougi-anshin.vercel.app/diagnosis/${diagnosisId}`
    if (navigator.share) navigator.share({ text })
    else { navigator.clipboard.writeText(text); alert('クリップボードにコピーしました') }
  }

  const progress = questions.length ? Math.round((current / questions.length) * 100) : 0
  const q = questions[current]
  const emotion = result ? emotionMap[result.type] : null
  const roadmap = result ? roadmapByType[result.type] : null
  const shizukuImg = getShizukuImage(current, questions.length)

  if (loading) return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '40px 16px', textAlign: 'center' }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%', overflow: 'hidden',
        margin: '0 auto 12px', position: 'relative',
      }}>
        <Image src="/images/characters/shizuku-smile.png" alt="しずく" fill style={{ objectFit: 'cover' }} />
      </div>
      <p style={{ color: '#9370db', fontSize: 14 }}>しずくが準備中です...</p>
    </main>
  )

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>

      {/* ヘッダー */}
      <div style={{ marginBottom: 16 }}>
        <Link href="/" style={{ fontSize: 12, color: '#9370db', textDecoration: 'none' }}>
          ← やさしい葬儀ナビ
        </Link>
        <h1 style={{ fontSize: 17, fontWeight: 700, color: '#2d1f4a', margin: '8px 0 2px' }}>{title}</h1>
        <p style={{ fontSize: 12, color: '#9370db', margin: 0 }}>{subtitle}</p>
      </div>

      {!result ? (
        <>
          {/* プログレスバー */}
          <div style={{ background: '#ede8f8', borderRadius: 99, height: 6, marginBottom: 6 }}>
            <div style={{
              background: 'linear-gradient(90deg, #9370db, #7b52c8)',
              width: `${progress}%`, height: 6,
              borderRadius: 99, transition: 'width .4s ease'
            }} />
          </div>
          <p style={{ fontSize: 11, color: '#b0a0c0', marginBottom: 16, textAlign: 'right' }}>
            Q{current + 1} / {questions.length}
          </p>

          {/* しずくが質問を語りかける */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 42, height: 42, borderRadius: '50%', overflow: 'hidden',
              flexShrink: 0, border: '2px solid #d5b8f5', position: 'relative',
            }}>
              <Image src={shizukuImg} alt="しずく" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              {/* しずくのセリフ */}
              <div style={{
                background: '#f5f0ff',
                borderRadius: '0 12px 12px 12px',
                padding: '8px 12px',
                marginBottom: 8,
              }}>
                <p style={{ fontSize: 12, color: '#7b5ea0', margin: 0, lineHeight: 1.5 }}>
                  {getShizukuMessage(current, questions.length, q?.question || '')}
                </p>
              </div>
              {/* 質問 */}
              <div style={{
                background: '#fff',
                border: '1.5px solid #e0d0f5',
                borderRadius: 12,
                padding: '16px 14px',
              }}>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#2d1f4a', lineHeight: 1.6, margin: 0 }}>
                  {q?.question}
                </p>
              </div>
            </div>
          </div>

          {/* 選択肢 */}
          <div style={{ marginLeft: 52 }}>
            {[
              { label: q?.optionA, score: q?.scoreA },
              { label: q?.optionB, score: q?.scoreB },
              { label: q?.optionC, score: q?.scoreC },
            ].filter(o => o.label).map((opt, i) => (
              <button key={i} onClick={() => choose(opt.score!)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: '#fff',
                  border: '1.5px solid #e0d0f5',
                  borderRadius: 12, padding: '13px 16px',
                  marginBottom: 10, fontSize: 14, color: '#374151',
                  cursor: 'pointer', lineHeight: 1.5,
                  transition: 'all 0.2s',
                }}>
                <span style={{ color: '#9370db', fontWeight: 700, marginRight: 8 }}>
                  {['A', 'B', 'C'][i]}.
                </span>
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* 結果：しずくからの報告 */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16, alignItems: 'flex-start' }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%', overflow: 'hidden',
              flexShrink: 0, border: '2px solid #d5b8f5', position: 'relative',
            }}>
              <Image src="/images/characters/shizuku-smile.png" alt="しずく" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{
              background: '#f5f0ff',
              borderRadius: '0 12px 12px 12px',
              padding: '10px 14px', flex: 1,
            }}>
              <p style={{ fontSize: 13, color: '#4a3060', margin: 0, lineHeight: 1.6 }}>
                診断が完了しました！あなたの結果をお伝えします。
              </p>
            </div>
          </div>

          {/* 結果カード */}
          <div style={{
            background: 'linear-gradient(135deg, #f5f0ff, #ede8f8)',
            border: '2px solid #d5b8f5',
            borderRadius: 16, padding: '20px 16px',
            marginBottom: 16, textAlign: 'center'
          }}>
            <div style={{ fontSize: 44, marginBottom: 8 }}>{result.emoji}</div>
            <div style={{ fontSize: 11, color: '#9370db', fontWeight: 700, marginBottom: 6 }}>
              あなたの診断結果
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#2d1f4a', marginBottom: 8 }}>
              {result.label}
            </div>
            <p style={{ fontSize: 14, color: '#4a3060', lineHeight: 1.6, margin: 0 }}>
              {result.headline}
            </p>
          </div>

          {/* 説明 */}
          <div style={{ background: '#fff', border: '1px solid #e0d0f5', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>
              {result.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[result.feature1, result.feature2, result.feature3].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: '#9370db', fontSize: 14, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 13, color: '#374151' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 注意点・次のステップ */}
          {emotion && (
            <div style={{ background: '#fff', border: '1px solid #e0d0f5', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>この結果の理由</p>
              <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: '0 0 12px' }}>{result.reason}</p>
              <div style={{ background: '#fef3c7', borderRadius: 8, padding: '10px 12px', marginBottom: 8 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#92400e', margin: '0 0 4px' }}>⚠️ 注意点</p>
                <p style={{ fontSize: 12, color: '#78350f', margin: 0, lineHeight: 1.5 }}>{result.pitfall}</p>
              </div>
              <div style={{ background: '#f0fdf4', borderRadius: 8, padding: '10px 12px' }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#14532d', margin: '0 0 4px' }}>👣 まず最初にやること</p>
                <p style={{ fontSize: 12, color: '#166534', margin: 0, lineHeight: 1.5 }}>{result.firstStep}</p>
              </div>
            </div>
          )}

          {/* ロードマップ */}
          {roadmap && (
            <Link href={`/roadmap/${result.roadmapSlug}`}
              style={{
                display: 'block',
                background: 'linear-gradient(135deg, #5b3fa0, #7b52c8)',
                color: '#fff', borderRadius: 12,
                padding: '14px 16px', textAlign: 'center',
                textDecoration: 'none', fontSize: 14, fontWeight: 700, marginBottom: 12
              }}>
              90日ロードマップを見る →
            </Link>
          )}

          {/* しずくおすすめサービス */}
          {recommendServices.length > 0 && (
            <div style={{ background: '#fff', border: '1px solid #e0d0f5', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
                  <Image src="/images/characters/shizuku-smile.png" alt="しずく" fill style={{ objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#2d1f4a', margin: 0 }}>
                  あなたにおすすめのサービス
                </p>
              </div>
              {recommendServices.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="nofollow noopener noreferrer"
                  style={{
                    display: 'block', border: '1px solid #e0d0f5',
                    borderRadius: 10, padding: '12px', marginBottom: 8, textDecoration: 'none',
                  }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{s.name}</span>
                    <span style={{ fontSize: 10, background: '#f5f0ff', color: '#7b52c8', borderRadius: 4, padding: '2px 6px' }}>
                      {s.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 8px' }}>{s.description}</p>
                  <div style={{
                    background: '#5b3fa0', color: '#fff',
                    borderRadius: 6, padding: '7px', textAlign: 'center', fontSize: 12, fontWeight: 700,
                  }}>
                    詳しく見てみる →
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* 他の診断 */}
          {nextDiagnoses.length > 0 && (
            <div style={{ background: '#fff', border: '1px solid #e0d0f5', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>
                他の診断も受けてみましょう
              </p>
              {nextDiagnoses.map((d, i) => (
                <Link key={i} href={d.href}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '10px 12px', background: '#f9fafb',
                    borderRadius: 8, border: '0.5px solid #e0d0f5',
                    marginBottom: 6, textDecoration: 'none',
                  }}>
                  <span style={{ fontSize: 13, color: '#374151' }}>{d.name}</span>
                  <span style={{ fontSize: 12, color: '#9370db' }}>→</span>
                </Link>
              ))}
            </div>
          )}

          {/* アクション */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={share} style={{
              flex: 1, padding: 12, border: '1.5px solid #d5b8f5',
              borderRadius: 10, fontSize: 13, cursor: 'pointer',
              background: '#fff', color: '#5b3fa0', fontWeight: 600,
            }}>
              シェアする
            </button>
            <button onClick={reset} style={{
              flex: 1, padding: 12, border: '1.5px solid #d5b8f5',
              borderRadius: 10, fontSize: 13, cursor: 'pointer',
              background: '#fff', color: '#5b3fa0', fontWeight: 600,
            }}>
              もう一度診断
            </button>
          </div>
        </>
      )}
    </main>
  )
}
