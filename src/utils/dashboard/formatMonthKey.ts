export function formatMonthKey(value: string) {
  return new Intl.DateTimeFormat('ru-RU', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}
