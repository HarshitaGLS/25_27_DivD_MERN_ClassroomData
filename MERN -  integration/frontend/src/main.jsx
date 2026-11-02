import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route,  Routes } from 'react-router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Home from "./components/Home.jsx"
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"
import PageNotFound from "./components/PageNotFound"
import UserDetails from './components/UserDetails.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
   <Routes>
        <Route path="/" element={<App/>}>
            <Route path="" index={true} element={<Home/>}/>
            <Route path="users" element={<UserList/>}/>
            <Route path="adduser" element={<UserForm/>}/>
            <Route path="edituser/:id" element={<UserForm/>}/>
            <Route path="user/details/:id" element={<UserDetails/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
</BrowserRouter>
,
)
