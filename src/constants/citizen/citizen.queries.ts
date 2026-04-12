import citizenService from '../../services/citizen.service'
import { citizenQueryKeys } from './citizen.queryKeys'

export const citizenQueries = {
  citizens: () => ({
    queryKey: citizenQueryKeys.all,
    queryFn: () => citizenService.getCitizens(),
  }),
  citizen: (id: string) => ({
    queryKey: citizenQueryKeys.detail(id),
    queryFn: () => citizenService.getCitizenMain(id),
  }),
  citizenGroup: (id: string) => ({
    queryKey: citizenQueryKeys.citizenGroup(id),
    queryFn: () => citizenService.getCitizenGroup(id),
  }),
  documents: (id: string) => ({
    queryKey: citizenQueryKeys.documents(id),
    queryFn: () => citizenService.getDocumentsGroup(id),
  }),
  career: (id: string) => ({
    queryKey: citizenQueryKeys.career(id),
    queryFn: () => citizenService.getCareerGroup(id),
  }),
  family: (id: string) => ({
    queryKey: citizenQueryKeys.family(id),
    queryFn: () => citizenService.getFamilyGroup(id),
  }),
  assets: (id: string) => ({
    queryKey: citizenQueryKeys.assets(id),
    queryFn: () => citizenService.getAssetsGroup(id),
  }),
  medicine: (id: string) => ({
    queryKey: citizenQueryKeys.medicine(id),
    queryFn: () => citizenService.getMedicineGroup(id),
  }),
  additional: (id: string) => ({
    queryKey: citizenQueryKeys.additional(id),
    queryFn: () => citizenService.getAdditionalGroup(id),
  }),
}
