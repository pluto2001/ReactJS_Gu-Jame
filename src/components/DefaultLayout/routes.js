import React from 'react'

const routes = [
  {
    path: '/student',
    exact: false,
    name: 'StudentComponent',
    component: React.lazy(() => import("./../Student/Student"))
  },
  {
    path: '/teacher',
    exact: true,
    name: 'TeacherComponent',
    component: React.lazy(() => import("./../Teacher/Teacher"))
  },
]

export default routes;