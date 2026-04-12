import { AdditionalTab } from '../components/shared/Card/tabs/AdditionalTab'
import { AssetsTab } from '../components/shared/Card/tabs/AssetsTab'
import { CareerTab } from '../components/shared/Card/tabs/CareerTab'
import { DocumentTab } from '../components/shared/Card/tabs/DocumentTab'
import { FamilyTab } from '../components/shared/Card/tabs/FamilyTab'
import { MedicineTab } from '../components/shared/Card/tabs/MedicineTab'
import { OverviewTab } from '../components/shared/Card/tabs/OverviewTab'

export const tabConfigs = [
  { key: 'main', label: 'Персональные данные', Component: OverviewTab },
  { key: 'documents', label: 'Документы', Component: DocumentTab },
  { key: 'career', label: 'Карьера', Component: CareerTab },
  { key: 'family', label: 'Семья', Component: FamilyTab },
  { key: 'assets', label: 'Имущество', Component: AssetsTab },
  { key: 'medicine', label: 'Медицина', Component: MedicineTab },
  { key: 'additional', label: 'Дополнительно', Component: AdditionalTab },
]
