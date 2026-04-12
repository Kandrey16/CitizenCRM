import { http, HttpResponse } from 'msw'

import type { Citizen } from '../types/models/citizen'
import type {
  AdditionalGroupPayload,
  AssetsGroupPayload,
  CareerGroupPayload,
  CitizenGroupPayload,
  DocumentsGroupPayload,
  FamilyGroupPayload,
  MedicineGroupPayload,
} from '../types/models/citizen-external-groups'
import citizensMock from './mock-data/citizens-mock.json'
import externalGroupsDemo from './mock-data/external-tables/citizen-external-groups.json'

const citizens = citizensMock as Citizen[]

const demoGroups = externalGroupsDemo as {
  citizen: CitizenGroupPayload
  documents: DocumentsGroupPayload
  career: CareerGroupPayload
  family: FamilyGroupPayload
  assets: AssetsGroupPayload
  medicine: MedicineGroupPayload
  additional: AdditionalGroupPayload
}

export const handlers = [
  http.get('/api/citizens', () => HttpResponse.json(citizens)),

  http.get('/api/citizens/:id', ({ params }) => {
    const row = citizens.find(c => c.ID_Citizen === params.id)
    if (!row) {
      return HttpResponse.json({ message: 'Not found' }, { status: 404 })
    }
    return HttpResponse.json(row)
  }),

  http.get('/api/citizens/:citizenId/citizen', () => {
    return HttpResponse.json(demoGroups.citizen)
  }),

  http.get('/api/citizens/:citizenId/documents', () => {
    return HttpResponse.json(demoGroups.documents)
  }),

  http.get('/api/citizens/:citizenId/career', () => {
    return HttpResponse.json(demoGroups.career)
  }),

  http.get('/api/citizens/:citizenId/family', () => {
    return HttpResponse.json(demoGroups.family)
  }),

  http.get('/api/citizens/:citizenId/assets', () => {
    return HttpResponse.json(demoGroups.assets)
  }),

  http.get('/api/citizens/:citizenId/medicine', () => {
    return HttpResponse.json(demoGroups.medicine)
  }),

  http.get('/api/citizens/:citizenId/additional', () => {
    return HttpResponse.json(demoGroups.additional)
  }),
]
