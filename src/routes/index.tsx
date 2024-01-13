import React from 'react'
import RootLayout from '@/layout/RootLayout'
import ErrorPage from '@/pages/Errors/Error'

import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        Component: React.lazy(() => import('@/pages/MDEditor')),
      },
    ],
  },
])

export default router
