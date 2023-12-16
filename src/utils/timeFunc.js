import { addMinutes } from 'date-fns'
export function convertDuration(min) {
  const hours = Math.floor(min / 60)
  const minutes = min - hours * 60
  return hours + 'ч ' + minutes + 'м'
}

export function convertDate(date, duration) {
  const startTime = date.slice(11, 16)
  const endTime = addMinutes(new Date(date), duration).toISOString().slice(11, 16)

  return `${startTime} - ${endTime}`
}

export function transferCount(arr) {
  if (arr.length === 0) return 'ПРЯМОЙ РЕЙС'
  if (arr.length === 1) return `${arr.length} ПЕРЕСАДКА`
  if (arr.length === 3 || arr.length === 2) return `${arr.length} ПЕРЕСАДКИ`
}
