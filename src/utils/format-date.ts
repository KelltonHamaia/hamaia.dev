import { intervalToDuration, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const getDurationBetweenDates = (
  startedAt: Date,
  endedAt: Date | null,
) => {
  const startingDate = format(startedAt, 'MMMM yyyy', { locale: ptBR })
  if (!endedAt) {
    return `${startingDate} - O momento`
  }
  const endingDate = format(endedAt, 'MMMM yyyy', { locale: ptBR })

  return `${startingDate} - ${endingDate}`
}

export const getIntervalBetweenDates = (
  startedAt: Date,
  endedAt: Date | null,
) => {
  const { years = 0, months = 0 } = intervalToDuration({
    start: startedAt,
    end: endedAt ?? new Date(),
  })

  const parts: string[] = []

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`)
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mês' : 'meses'}`)
  }
  return parts.join(' ')
}
