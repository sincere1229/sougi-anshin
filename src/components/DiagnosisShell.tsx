'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
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
      // 集計
      const counts: Record<string, number> = {}
      next.forEach(s => { counts[s] = (counts[s] || 0) + 1 })
      const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
      // typeマッピング
      const typeMap: Record<string, string> = {
        'A': results[0]?.type, 'B': results[1]?.type, 'C': results[2]?.type, 'D': results[3]?.type
      }
      const matched = results.find(r => r.type === typeMap[topType]) || results[0]
      setResult(matched)
    }
  }

  const reset = () => {
    setCurrent(0); setAnswers([]); setResult(null)
  }

  const share = () => {
    if (!result) return
    const text = `【介護ナビ診断結果】${result.emoji}${result.label}\n${result.headline}\nhttps://kaigo-anshin.net/diagnosis/${diagnosisId}`
    if (navigator.share) navigator.share({ text })
    else { navigator.clipboard.writeText(text); alert('クリップボードにコピーしました') }
  }

  const progress = questions.length ? Math.round((current / questions.length) * 100) : 0
  const q = questions[current]
  const emotion = result ? emotionMap[result.type] : null
  const roadmap = result ? roadmapByType[result.type] : null

  if (loading) return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '40px 16px', textAlign: 'center' }}>
      <p style={{ color: '#6b7280', fontSize: 14 }}>読み込み中...</p>
    </main>
  )

  return (
    <main style={{ maxWidth: 480, margin: '0 auto', padding: '16px 16px 48px' }}>
      {/* ヘッダー */}
      <div style={{ marginBottom: 20 }}>
        <Link href="/" style={{ fontSize: 12, color: '#6b7280', textDecoration: 'none' }}>← 葬儀ナビ</Link>
        <h1 style={{ fontSize: 18, fontWeight: 700, color: '#1f2937', margin: '8px 0 4px' }}>{title}</h1>
        <p style={{ fontSize: 13, color: '#6b7280', margin: 0 }}>{subtitle}</p>
      </div>

      {!result ? (
        <>
          {/* プログレスバー */}
          <div style={{ background: '#f3f4f6', borderRadius: 99, height: 6, marginBottom: 20 }}>
            <div style={{ background: '#0ea5e9', width: `${progress}%`, height: 6, borderRadius: 99, transition: 'width .3s' }} />
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', marginBottom: 16 }}>Q{current + 1} / {questions.length}</p>

          {/* 質問 */}
          <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '20px 16px', marginBottom: 16 }}>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#1f2937', lineHeight: 1.6, margin: 0 }}>{q?.question}</p>
          </div>

          {/* 選択肢 */}
          {[
            { label: q?.optionA, score: q?.scoreA },
            { label: q?.optionB, score: q?.scoreB },
            { label: q?.optionC, score: q?.scoreC },
          ].filter(o => o.label).map((opt, i) => (
            <button key={i} onClick={() => choose(opt.score!)}
              style={{ display: 'block', width: '100%', textAlign: 'left', background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', marginBottom: 10, fontSize: 14, color: '#374151', cursor: 'pointer', lineHeight: 1.5 }}>
              {['A', 'B', 'C'][i]}. {opt.label}
            </button>
          ))}
        </>
      ) : (
        <>
          {/* 結果 */}
          <div style={{ background: '#f0f9ff', border: '0.5px solid #bae6fd', borderRadius: 12, padding: '20px 16px', marginBottom: 16, textAlign: 'center' }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>{result.emoji}</div>
            <div style={{ fontSize: 12, color: '#0284c7', fontWeight: 600, marginBottom: 6 }}>あなたの診断結果</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#0c4a6e', marginBottom: 8 }}>{result.label}</div>
            <p style={{ fontSize: 14, color: '#0369a1', lineHeight: 1.6, margin: 0 }}>{result.headline}</p>
          </div>

          {/* 説明 */}
          <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 12px' }}>{result.description}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[result.feature1, result.feature2, result.feature3].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: '#0ea5e9', fontSize: 14, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 13, color: '#374151' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* なぜこの結果か */}
          {emotion && (
            <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
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

          {/* ロードマップリンク */}
          {roadmap && (
            <Link href={`/roadmap/${result.roadmapSlug}`}
              style={{ display: 'block', background: '#0ea5e9', color: '#fff', borderRadius: 10, padding: '14px 16px', textAlign: 'center', textDecoration: 'none', fontSize: 14, fontWeight: 600, marginBottom: 12 }}>
              90日ロードマップを見る →
            </Link>
          )}

          {/* おすすめサービス */}
          {recommendServices.length > 0 && (
            <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>あなたにおすすめのサービス</p>
              {recommendServices.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="nofollow noopener noreferrer"
                  style={{ display: 'block', border: '0.5px solid #e5e7eb', borderRadius: 8, padding: '10px 12px', marginBottom: 8, textDecoration: 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: '#1f2937' }}>{s.name}</span>
                    <span style={{ fontSize: 10, background: '#f0f9ff', color: '#0284c7', borderRadius: 4, padding: '2px 6px' }}>{s.badge}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>{s.description}</p>
                </a>
              ))}
            </div>
          )}

          {/* 他の診断 */}
          {nextDiagnoses.length > 0 && (
            <div style={{ background: '#fff', border: '0.5px solid #e5e7eb', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>他の診断も受けてみましょう</p>
              {nextDiagnoses.map((d, i) => (
                <Link key={i} href={d.href}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px', background: '#f9fafb', borderRadius: 8, border: '0.5px solid #e5e7eb', marginBottom: 6, textDecoration: 'none' }}>
                  <span style={{ fontSize: 13, color: '#374151' }}>{d.name}</span>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>→</span>
                </Link>
              ))}
            </div>
          )}

          {/* アクション */}
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={share} style={{ flex: 1, padding: 12, border: '0.5px solid #e5e7eb', borderRadius: 8, fontSize: 13, cursor: 'pointer', background: '#fff', color: '#374151' }}>シェアする</button>
            <button onClick={reset} style={{ flex: 1, padding: 12, border: '0.5px solid #e5e7eb', borderRadius: 8, fontSize: 13, cursor: 'pointer', background: '#fff', color: '#374151' }}>もう一度診断</button>
          </div>
        </>
      )}
    </main>
  )
}
