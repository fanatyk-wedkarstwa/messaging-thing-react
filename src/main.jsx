import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './Pages/Home.jsx'
import Messages from './Pages/Messages.jsx'
import Error from './Pages/Error.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>,
  },
  {
    path: '/messages',
    element: <Messages/>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
