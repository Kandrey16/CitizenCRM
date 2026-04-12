import type { QueryClient } from '@tanstack/react-query'

import { citizenQueries } from './citizen.queries'

export function prefetchCitizenMain(queryClient: QueryClient, id: string) {
  return Promise.allSettled([
    queryClient.prefetchQuery(citizenQueries.citizen(id)),
    queryClient.prefetchQuery(citizenQueries.citizenGroup(id)),
    queryClient.prefetchQuery(citizenQueries.documents(id)),
    queryClient.prefetchQuery(citizenQueries.career(id)),
  ])
}

//сделать lazy loading
export function prefetchCitizenSecondary(queryClient: QueryClient, id: string) {
  return Promise.allSettled([
    queryClient.prefetchQuery(citizenQueries.family(id)),
    queryClient.prefetchQuery(citizenQueries.assets(id)),
    queryClient.prefetchQuery(citizenQueries.medicine(id)),
    queryClient.prefetchQuery(citizenQueries.additional(id)),
  ])
}
