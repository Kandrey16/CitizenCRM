import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function applyThemeToDocument(mode: ThemeMode) {
  document.documentElement.setAttribute('data-theme', mode)
}

type ThemeState = {
  theme: ThemeMode
  setTheme: (mode: ThemeMode) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: 'light',
      setTheme: mode => {
        applyThemeToDocument(mode)
        set({ theme: mode })
      },
    }),
    {
      name: STORAGE_KEY,
      onRehydrateStorage: () => state => {
        if (state?.theme) applyThemeToDocument(state.theme)
      },
    },
  ),
)

export function hydrateThemeFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      applyThemeToDocument('light')
      return
    }
    const parsed = JSON.parse(raw) as { state?: { theme?: ThemeMode } }
    const mode = parsed.state?.theme
    if (mode === 'light' || mode === 'dark') applyThemeToDocument(mode)
    else applyThemeToDocument('light')
  } catch {
    applyThemeToDocument('light')
  }
}
