import type { ReactNode } from 'react'

type Props = {
  title: string
  isLoading: boolean
  error: Error | null
  children: ReactNode
  empty?: boolean
  emptyHint?: string
  actions?: ReactNode
}

export function TabShell({
  title,
  isLoading,
  error,
  children,
  empty,
  emptyHint = 'Нет данных для отображения',
  actions,
}: Props) {
  return (
    <div className="p-1 sm:p-2">
      <div className="flex items-center justify-between px-4">
        <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        {actions && <div className="mt-4">{actions}</div>}
      </div>
      {isLoading && <div className="rounded-xl px-4 py-8 text-center text-sm">Загрузка…</div>}
      {!isLoading && error && (
        <div className="rounded-xl px-4 py-3 text-sm text-red-800">{error.message}</div>
      )}
      {!isLoading && !error && empty && (
        <div className="rounded-xl px-4 py-8 text-center text-sm">{emptyHint}</div>
      )}
      {!isLoading && !error && !empty && children}
    </div>
  )
}
