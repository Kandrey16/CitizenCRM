import { create } from 'zustand'

interface CitizenStore {
  selectedCitizenId: string
  setSelectedCitizenId: (id: string) => void
}

export const useCitizenStore = create<CitizenStore>(set => ({
  selectedCitizenId: null,
  setSelectedCitizenId: id => set({ selectedCitizenId: id }),
}))
