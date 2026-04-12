import type { TableProps as AntTableProps } from 'antd'
import { Table as AntTable } from 'antd'

import { defaultPagination } from '../../config/table.config'

function mergePagination<T extends object>(
  pagination: AntTableProps<T>['pagination'],
): AntTableProps<T>['pagination'] {
  if (pagination === false) return false
  return { ...defaultPagination, ...pagination }
}

export function Table<T extends object>(props: AntTableProps<T>) {
  const { pagination, scroll, size, bordered, ...rest } = props

  return (
    <AntTable<T>
      className="cursor-pointer"
      size={size ?? 'middle'}
      bordered={bordered ?? true}
      scroll={scroll ?? { x: 'max-content' }}
      pagination={mergePagination(pagination)}
      {...rest}
    />
  )
}

export type { TableColumnsType as ColumnsType } from 'antd'
