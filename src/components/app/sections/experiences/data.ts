export type Experience = {
  company: string
  url: string
  period: {
    startedAt: Date
    endedAt: Date | null
  }
  keyContributions: string[]
}

export const data: Experience[] = [
  {
    company: 'Vexur',
    url: '/images/companies/vexur.webp',
    period: {
      startedAt: new Date(2024, 8, 1),
      endedAt: null,
    },
    keyContributions: [
      'coopercard',
      'medsenior',
      'mxm',
      'emails',
      'visualizer',
      'neo4jOptimization',
    ],
  },
]
