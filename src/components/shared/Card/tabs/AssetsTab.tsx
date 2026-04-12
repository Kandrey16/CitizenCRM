import { useQuery } from '@tanstack/react-query'

import { citizenQueries } from '../../../../constants/citizen/citizen.queries'
import { propertyTypeLabel, vehicleTypeLabel } from '../../../../data/tabLabels'
import { propertySchema, vehicleSchema } from '../../../../schema/assets.schema'
import { EditButton } from '../../../ui/EditButton'
import { FieldRow } from '../../../ui/FieldRow'
import { TabSection } from '../../../ui/TabSection'
import { TabShell } from '../../../ui/TabShell'

type Props = {
  id: string
}

export function AssetsTab({ id }: Props) {
  const { data, isLoading, error } = useQuery({
    ...citizenQueries.assets(id),
    enabled: !!id,
  })
  const hasAssets = data && (data.vehicles.length > 0 || data.properties.length > 0)

  return (
    <TabShell
      title=""
      isLoading={isLoading}
      error={error}
      empty={!data || !hasAssets}
      emptyHint="Нет данных об имуществе"
    >
      {data && hasAssets && (
        <div className="space-y-8">
          {data.properties.map((p, i) => (
            <TabSection
              key={p.ID_Propertie}
              title={`Объект недвижимости ${i + 1}`}
              actions={<EditButton data={p} schema={propertySchema} />}
            >
              <FieldRow label="Тип">{propertyTypeLabel[p.type]}</FieldRow>
              <FieldRow label="Адрес">{p.address}</FieldRow>
              <FieldRow label="Площадь (описание)">{p.area}</FieldRow>
              <FieldRow label="Площадь, м²">{p.square}</FieldRow>
            </TabSection>
          ))}

          {data.vehicles.map((v, i) => (
            <TabSection
              key={v.ID_Vehicle}
              title={`Транспорт ${i + 1}`}
              actions={<EditButton data={v} schema={vehicleSchema} />}
            >
              <FieldRow label="Тип">{vehicleTypeLabel[v.type]}</FieldRow>
              <FieldRow label="Марка и модель">
                {v.brand} {v.model}
              </FieldRow>
              <FieldRow label="Год выпуска">{v.year}</FieldRow>
              <FieldRow label="Госномер">{v.number}</FieldRow>
            </TabSection>
          ))}
        </div>
      )}
    </TabShell>
  )
}
