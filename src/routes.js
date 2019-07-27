import React from 'react'

const routes = [
  {
    path: '/login',
    exact: true,
    name: 'LoginComponent',
    component: React.lazy(() => import('./components/Login/Login'))
  },
  {
    path: '/',
    exact: false,
    name: 'DefaultLayout',
    component: React.lazy(() => import('./components/DefaultLayout/DefaultLayout'))
  }
]

export default routes;