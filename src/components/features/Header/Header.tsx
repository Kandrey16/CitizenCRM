import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, Space } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

import { CITIZENS, DASHBOARD } from '../../../constants/routes/routes'
import { useThemeStore } from '../../../store/theme.store'

export function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useThemeStore(s => s.theme)
  const setTheme = useThemeStore(s => s.setTheme)

  const selectedKey = location.pathname.startsWith(CITIZENS) ? CITIZENS : DASHBOARD

  return (
    <Layout.Header
      className="flex items-center gap-4 px-6"
      style={{
        background: 'var(--color-header-bg)',
        borderBottom: '1px solid var(--color-header-border)',
      }}
    >
      <div
        className="shrink-0 font-semibold tracking-wide"
        style={{ color: 'var(--color-header-text)' }}
      >
        Citizen CRM
      </div>
      <Menu
        theme={theme === 'dark' ? 'dark' : 'light'}
        mode="horizontal"
        selectedKeys={[selectedKey]}
        items={[
          { key: DASHBOARD, label: 'Графики' },
          { key: CITIZENS, label: 'Картотека' },
        ]}
        onClick={e => navigate(e.key)}
        className="flex-1 border-none! bg-transparent!"
      />
      <Space className="shrink-0" size="small">
        <Button
          type={theme === 'light' ? 'primary' : 'default'}
          icon={<SunOutlined />}
          aria-label="Светлая тема"
          onClick={() => setTheme('light')}
        />
        <Button
          type={theme === 'dark' ? 'primary' : 'default'}
          icon={<MoonOutlined />}
          aria-label="Тёмная тема"
          onClick={() => setTheme('dark')}
        />
      </Space>
    </Layout.Header>
  )
}
