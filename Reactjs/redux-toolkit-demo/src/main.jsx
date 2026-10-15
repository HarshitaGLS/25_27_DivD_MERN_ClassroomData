import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Products from './components/Products.jsx'
import LoginPage from './pages/LoginPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import { Provider } from 'react-redux'
import myStore from './redux/store.js'
const myRoutes =  createBrowserRouter([
  {path:"/",element:<App/>,
    children:[
      {path:"", index:true, element:<HomePage/>},
      {path:"about", element:<AboutPage/>},
      {path:"products",  element:<Products/>},
]},
{path:"/login",element:<LoginPage/>},

{path:"*" , element:<PageNotFound/>}
])

createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <RouterProvider router={myRoutes}/>
  </Provider>
)
