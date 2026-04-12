import type { TableProps } from 'antd'

export const defaultPagination: TableProps['pagination'] = {
  showSizeChanger: true,
  pageSizeOptions: [10, 20, 50],
  defaultPageSize: 10,
}
