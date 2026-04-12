import { useState } from 'react'

import type { FieldSchema } from '../../types/forms/field.schema'
import { GenericEditForm } from '../features/Form/GenericEditForm'

interface Props<T> {
  data: T
  schema: FieldSchema<T>[]
}

export function EditButton<T>({ data, schema }: Props<T>) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button className="rounded-md border px-3 py-1 text-sm" onClick={() => setIsOpen(true)}>
        Редактировать
      </button>
      <GenericEditForm
        schema={schema}
        defaultValues={data}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}
