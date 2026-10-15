import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsername } from '../redux/loginSlice'

const HomePage = () => {
  // const uname = useSelector((state)=>state.login.username)
    const uname = useSelector(selectUsername)
    
  return (
    <>
        <h1>Home Page</h1>
        <h2>{uname}</h2>
    </>
  )
}

export default HomePage
