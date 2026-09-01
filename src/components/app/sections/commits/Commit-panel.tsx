'use client'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: Record<string, number>
  contributions: Activity[]
}

export const CommitPanel = () => {
  const [data, setData] = useState<Activity[] | null>(null)
  const [error, setError] = useState(false)
  const t = useTranslations('CommitPanel')

  useEffect(() => {
    fetch(
      'https://github-contributions-api.jogruber.de/v4/KelltonHamaia?y=last',
    )
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao buscar contribuições')
        return res.json()
      })
      .then((json: ApiResponse) => setData(json.contributions))
      .catch(() => setError(true))
  }, [])

  if (error) {
    return <div className="h-40 w-full bg-zinc-950/60 transition" />
  }

  if (!data) {
    return (
      <div className="text-muted-foreground flex h-40 w-full animate-pulse items-center justify-center rounded bg-zinc-900 transition">
        {t('githubLoadingPlaceholder')}
      </div>
    )
  }

  return (
    <ActivityCalendar
      data={data}
      className="transition"
      colorScheme="dark"
      theme={{
        dark: ['#1f1f1f', '#39d353'],
      }}
      labels={{
        totalCount: t.raw('totalCount'),
        legend: {
          less: t('legend.more'),
          more: t('legend.less'),
        },
      }}
    />
  )
}
