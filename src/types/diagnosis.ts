export interface Question {
  id: number
  question: string
  optionA: string
  optionB: string
  optionC: string
  scoreA: string
  scoreB: string
  scoreC: string
}

export interface ResultTemplate {
  type: string
  label: string
  emoji: string
  headline: string
  description: string
  feature1: string
  feature2: string
  feature3: string
  reason: string
  pitfall: string
  firstStep: string
  roadmapSlug: string
  noteKeyword: string
}

export interface RoadmapInfo {
  slug: string
  title: string
  description: string
}

export interface EmotionInfo {
  feature: string
  reason: string
  pitfall: string
  firstStep: string
}

export interface RecommendService {
  name: string
  url: string
  description: string
  forWho: string
  notFor: string
  badge: string
  imageUrl?: string
  imageWidth?: number
  imageHeight?: number
  impUrl?: string
}
