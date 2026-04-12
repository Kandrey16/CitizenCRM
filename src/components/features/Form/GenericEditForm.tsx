import { Modal } from 'antd'
import { useEffect } from 'react'
import type { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'

import type { FieldSchema } from '../../../types/forms/field.schema'
import { SchemaField } from './SchemaField'

interface Props<T extends FieldValues> {
  schema: FieldSchema<T>[]
  defaultValues: T
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: T) => void
}

export function GenericEditForm<T extends FieldValues>({
  schema,
  defaultValues,
  isOpen,
  onClose,
  onSubmit,
}: Props<T>) {
  const methods = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
  })

  useEffect(() => {
    methods.reset(defaultValues as DefaultValues<T>)
  }, [defaultValues, methods, isOpen])

  const handleSubmit: SubmitHandler<T> = data => {
    onSubmit(data)
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isOpen}
        onCancel={onClose}
        footer={null}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <div className="space-y-4">
              {schema.map(field => (
                <div key={String(field.name)}>
                  <label className="mb-1 block">{field.label}</label>
                  <SchemaField field={field} />
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button type="button" onClick={onClose}>
                Отмена
              </button>
              <button type="submit">
                Сохранить
              </button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </>
  )
}
