import { intervalToDuration, format, Locale, formatDuration } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'

export const getDurationBetweenDates = (
  startedAt: Date,
  endedAt: Date | null,
  locale: string,
) => {
  const localeDefined = locale === 'en' ? enUS : ptBR
  const startingDate = format(startedAt, 'MMMM yyyy', { locale: localeDefined })

  const until = locale === 'en' ? 'Present' : 'O momento'
  if (!endedAt) {
    return `${startingDate} - ${until}`
  }
  const endingDate = format(endedAt, 'MMMM yyyy', { locale: localeDefined })

  return `${startingDate} - ${endingDate}`
}

export const getIntervalBetweenDates = (
  startedAt: Date,
  endedAt: Date | null,
  locale: string,
) => {
  const localeDefined = locale === 'en' ? enUS : ptBR

  const { years = 0, months = 0 } = intervalToDuration({
    start: startedAt,
    end: endedAt ?? new Date(),
  })

  return formatDuration(
    { years, months },
    { locale: localeDefined, format: ['years', 'months'] },
  )
}
