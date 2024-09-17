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

import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
])

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMdoe>
    <RouterProvider router={router} />
  </React.StrictMdoe>,
)
