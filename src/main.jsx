import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from '@/error-page'
import Contact from '@/routes/contact'
import Root, { loader as rootLoader, action as rootAction } from '@/routes/root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
    ],
  },
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

//import { BrowserRouter } from 'react-router-dom';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { useForm } from 'react-hook-form'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
