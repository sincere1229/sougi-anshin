import { MetadataRoute } from 'next'
const BASE = 'https://sougi-anshin.net'
const DIAGNOSES = ["style", "cost", "haka", "shukatsu", "souzoku"]
const ROADMAPS = ["style-ippan", "style-kazoku", "style-chokuso", "style-ichinichi", "cost-antei", "cost-chuukan", "cost-kiken", "cost-jizensodan", "haka-ippan", "haka-jumoku", "haka-nokotsudo", "haka-sankotsu", "shukatsu-ok", "shukatsu-chuukan", "shukatsu-mikaijin", "shukatsu-kinkyuu", "souzoku-sokuza", "souzoku-chukikan", "souzoku-senmonka", "souzoku-junbi"]
const CATEGORIES = ["hajimete", "sougi-col", "haka-col", "souzoku-col", "shukatsu-col"]
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const urls: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/column`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/recommend`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, priority: 0.3 },
    { url: `${BASE}/privacy`, lastModified: now, priority: 0.3 },
  ]
  DIAGNOSES.forEach(d => urls.push({ url: `${BASE}/diagnosis/${d}`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 }))
  ROADMAPS.forEach(r => urls.push({ url: `${BASE}/roadmap/${r}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }))
  CATEGORIES.forEach(cat => {
    for (let i = 1; i <= 10; i++) {
      urls.push({ url: `${BASE}/column/${cat}/${i}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 })
    }
  })
  return urls
}
