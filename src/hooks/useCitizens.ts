import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../constants/citizen/citizen.queries'

export function useCitizens() {
  return useQuery({
    ...citizenQueries.citizens(),
  })
}
