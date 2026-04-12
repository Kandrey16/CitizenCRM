export type FieldType = 'input' | 'select' | 'textarea' | 'date'

export interface BaseField<T> {
  name: keyof T
  label: string
  type: FieldType
  placeholder?: string
}

export interface InputField<T> extends BaseField<T> {
  type: 'input'
}

export interface TextAreaField<T> extends BaseField<T> {
  type: 'textarea'
}

export interface DateField<T> extends BaseField<T> {
  type: 'date'
}

export interface SelectField<T> extends BaseField<T> {
  type: 'select'
  options: { label: string; value: string }[]
}

export type FieldSchema<T> = InputField<T> | TextAreaField<T> | DateField<T> | SelectField<T>
