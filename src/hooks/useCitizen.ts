import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../constants/citizen/citizen.queries'

export function useCitizen(id: string) {
  return useQuery({
    ...citizenQueries.citizen(id),
    enabled: !!id,
  })
}
