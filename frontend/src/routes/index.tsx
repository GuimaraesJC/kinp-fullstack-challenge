import { createBrowserRouter } from 'react-router'

import App from '../App'
import LoginPage from '../pages/login'
import SignUpPage from '../pages/signup'
import ProtectedRoute from './protectedRoute'
import UsersPage from '../pages/users'
import AlbumsPage from '../pages/albums'
import NotFoundPage from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <App />,
        children: [
          {
            index: true,
            element: <UsersPage />
          },
          {
            path: ':userId/albums',
            element: <AlbumsPage />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
