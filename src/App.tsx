import { ConfigProvider, Layout, theme as antdTheme } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

import { Header } from './components/features/Header/Header'
import { useThemeStore } from './store/theme.store'

function App() {
  const themeMode = useThemeStore(s => s.theme)
  const algorithm = themeMode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm

  return (
    <ConfigProvider theme={{ algorithm }}>
      <Layout className="min-h-screen" style={{ background: 'var(--color-secondary)' }}>
        <Header />
        <Content className="p-6" style={{ background: 'var(--color-secondary)' }}>
          <div className="mx-auto">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </ConfigProvider>
  )
}

export default App
