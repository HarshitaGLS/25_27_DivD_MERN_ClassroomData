import { useEffect, useState } from "react"
import { Link, Outlet, Route, Routes } from "react-router"
import MyNavbar from "./components/MyNavbar"


function App() {
  // const [count,setCount]=useState(1)
  // useEffect(()=>{ console.log("App component loaded ")},[])
  // useEffect(()=>{ console.log(count)},[count])
  return (
    <>
      <MyNavbar />
      <div className="container">
      <Outlet/>
      </div>
    </>
  )
}

export default App