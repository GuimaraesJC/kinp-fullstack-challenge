import { createBrowserRouter } from "react-router"

import App from '../App'
import LoginPage from '../pages/login'
import SignUpPage from '../pages/signup'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
