import React from 'react'

const routes = [
  {
    path: '/student/group',
    exact: true,
    name: 'StudentGroupComponent',
    component: React.lazy(() => import('./children/Group'))
  },
]

export default routes;