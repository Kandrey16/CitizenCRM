import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import { CITIZENS, DASHBOARD, PROFILE } from '../constants/routes/routes'
import CitizensPage from '../pages/Citizens'
import DashboardPage from '../pages/Dashboard'
import ProfilePage from '../pages/Profile'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: DASHBOARD,
        Component: DashboardPage,
      },
      {
        path: CITIZENS,
        Component: CitizensPage,
      },
      {
        path: PROFILE,
        Component: ProfilePage,
      },
    ],
  },
])
