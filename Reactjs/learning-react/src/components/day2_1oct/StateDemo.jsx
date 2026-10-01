import React, { useState } from 'react'

const StateDemo = ({username}) => {
    let [isLogin,setIsLogin] = useState(true) 
  return (
    <>
        <button type="button" 
        onClick={()=>setIsLogin(!isLogin)}>
        {isLogin ? "Logout" :"Login"}    
        </button>
        <h1>{isLogin ? <>
            <h2>User is loggedIn</h2>
            <h3>Welcome {username}</h3>
        </> :"user logout"}</h1>
    </>
  )
}

export default StateDemo
