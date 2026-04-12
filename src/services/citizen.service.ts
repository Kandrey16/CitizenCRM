import axios from 'axios'

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

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
})

class CitizenService {
  async getCitizens(): Promise<Citizen[]> {
    const { data } = await api.get<Citizen[]>('/citizens')
    return data
  }

  async getCitizenMain(id: string): Promise<Citizen> {
    const { data } = await api.get<Citizen>(`/citizens/${id}`)
    return data
  }

  async getCitizenGroup(citizenId: string): Promise<CitizenGroupPayload> {
    const { data } = await api.get<CitizenGroupPayload>(`/citizens/${citizenId}/citizen`)
    return data
  }

  async getDocumentsGroup(citizenId: string): Promise<DocumentsGroupPayload> {
    const { data } = await api.get<DocumentsGroupPayload>(`/citizens/${citizenId}/documents`)
    return data
  }

  async getCareerGroup(citizenId: string): Promise<CareerGroupPayload> {
    const { data } = await api.get<CareerGroupPayload>(`/citizens/${citizenId}/career`)
    return data
  }

  async getFamilyGroup(citizenId: string): Promise<FamilyGroupPayload> {
    const { data } = await api.get<FamilyGroupPayload>(`/citizens/${citizenId}/family`)
    return data
  }

  async getAssetsGroup(citizenId: string): Promise<AssetsGroupPayload> {
    const { data } = await api.get<AssetsGroupPayload>(`/citizens/${citizenId}/assets`)
    return data
  }

  async getMedicineGroup(citizenId: string): Promise<MedicineGroupPayload> {
    const { data } = await api.get<MedicineGroupPayload>(`/citizens/${citizenId}/medicine`)
    return data
  }

  async getAdditionalGroup(citizenId: string): Promise<AdditionalGroupPayload> {
    const { data } = await api.get<AdditionalGroupPayload>(`/citizens/${citizenId}/additional`)
    return data
  }
}

export default new CitizenService()
