import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router"

function App(){
  // const [count,setCount]=useState(1)
  // useEffect(()=>{ console.log("App component loaded ")},[])
  // useEffect(()=>{ console.log(count)},[count])
  return(
    <div className="container">
      <h1>API integration</h1>
      {/* <h2>{count}</h2>
      <button type="button" onClick={()=>setCount(count+1)}>increase</button> */}

      <Link to="/userlist" className="btn btn-primary m-2"> User List </Link>
      <Link to="/userform" className="btn btn-primary m-2"> Add User </Link>
      
      <Outlet/>

    </div>
  )
}

export default App