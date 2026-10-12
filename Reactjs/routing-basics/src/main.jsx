import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Products from './components/Products.jsx'

const myRoutes = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[
      {path:"" ,index:true, element:<HomePage/>},
      {path:"about", element:<AboutPage/>},
      {path:"products",element:<Products/>}
        ]
  },
   {path:"/login",element:<LoginPage/>},
   {path:"*", element:<PageNotFound/>}
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={myRoutes}/>
)
