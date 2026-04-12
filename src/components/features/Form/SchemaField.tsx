import { Controller, useFormContext } from 'react-hook-form'

import type { FieldSchema } from '../../../types/forms/field.schema'

interface Props<T> {
  field: FieldSchema<T>
}

export function SchemaField<T>({ field }: Props<T>) {
  const { control } = useFormContext()

  switch (field.type) {
    case 'input':
      return (
        <Controller
          name={field.name as string}
          control={control}
          render={({ field: formField }) => (
            <input
              {...formField}
              placeholder={field.placeholder}
              className="w-full rounded border p-2"
            />
          )}
        />
      )

    case 'select':
      return (
        <Controller
          name={field.name as string}
          control={control}
          render={({ field: formField }) => (
            <select {...formField} className="w-full rounded border p-2">
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}
        />
      )

    case 'date':
      return (
        <Controller
          name={field.name as string}
          control={control}
          render={({ field: formField }) => (
            <input type="date" {...formField} className="w-full rounded border p-2" />
          )}
        />
      )

    case 'textarea':
      return (
        <Controller
          name={field.name as string}
          control={control}
          render={({ field: formField }) => (
            <textarea
              {...formField}
              placeholder={field.placeholder}
              className="w-full rounded border p-2"
              rows={4}
            />
          )}
        />
      )

    default:
      return null
  }
}
