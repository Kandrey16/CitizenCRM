import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { QueryProvider } from './providers/QueryProvider'
import { router } from './routes/AppRouter.ts'
import { hydrateThemeFromStorage } from './store/theme.store.ts'

hydrateThemeFromStorage()

async function prepare() {
  if (!import.meta.env.DEV) return
  const { worker } = await import('./mocks/browser')
  await worker.start({ onUnhandledRequest: 'bypass' })
}

function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </StrictMode>,
  )
}

prepare().then(renderApp)
