import { useQueryClient } from '@tanstack/react-query'

import {
  prefetchCitizenMain,
  prefetchCitizenSecondary,
} from '../constants/citizen/citizen.prefetch'

export function usePrefetchCitizen() {
  const queryClient = useQueryClient()

  const prefetchData = (id: string) => {
    prefetchCitizenMain(queryClient, id)

    setTimeout(() => {
      prefetchCitizenSecondary(queryClient, id)
    }, 1000)
  }

  return { prefetchData }
}
