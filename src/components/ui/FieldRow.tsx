import type { ReactNode } from 'react'

type Props = {
  label: string
  children: ReactNode
}
export function FieldRow({ label, children }: Props) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-zinc-400 py-2.5 last:border-b-0 sm:flex-row sm:gap-6">
      <span className="shrink-0 text-sm sm:w-44">{label}</span>
      <div className="min-w-0 text-sm font-medium">{children}</div>
    </div>
  )
}
