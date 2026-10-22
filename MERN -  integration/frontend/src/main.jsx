import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserList from './components/UserList.jsx'
import UserForm from './components/UserForm.jsx'
import Home from './components/Home.jsx'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"


const myRoutes = createBrowserRouter([
  {path:"/", element:<App/>,
    children:[
      {path:"", element:<Home/>},
      {path:"userlist",element:<UserList/>},
      {path:"userform",element:<UserForm/>},

    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider router={myRoutes}/>
,
)
