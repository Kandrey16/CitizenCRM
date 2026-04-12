import { Card } from 'antd'

import { CardTabs } from './CardTabs'
import { MainInfo } from './MainInfo'
import SocialLinks from './SocialLinks/SocialLinks.tsx'

export function CitizenCard() {
  return (
    <Card loading={false} className="rounded-3xl p-8">
      <div className="space-y-4">
        <MainInfo />
        <SocialLinks />
      </div>

      <CardTabs />
    </Card>
  )
}
