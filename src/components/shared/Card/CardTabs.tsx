import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import { useState } from 'react'

import { tabConfigs } from '../../../config/tabs.config'
import { useCitizenStore } from '../../../store/citizen.store'

export function CardTabs() {
  const selectedId = useCitizenStore(s => s.selectedCitizenId)

  const [activeTab, setActiveTab] = useState('main')

  return (
    <div className="mt-8">
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        {tabConfigs.map(({ key, label, Component }) => (
          <TabPane key={key} tab={label}>
            <Component id={selectedId} />
          </TabPane>
        ))}
      </Tabs>
    </div>
  )
}
