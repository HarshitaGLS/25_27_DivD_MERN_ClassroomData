import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

const myRoutes = createBrowserRouter([
  {
    path:"/",element:<App/>
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={myRoutes}/>
)
