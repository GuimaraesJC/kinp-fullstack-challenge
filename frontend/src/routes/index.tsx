import { createBrowserRouter } from 'react-router'

import App from '../App'
import LoginPage from '../pages/login'
import SignUpPage from '../pages/signup'
import ProtectedRoute from './protectedRoute'

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <App />
      }
    ]
  }
])
