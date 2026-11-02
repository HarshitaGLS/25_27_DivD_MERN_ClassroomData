import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getUserById } from '../apiservices'

const UserDetails = () => {
    const {id} = useParams()
    const [user,setUser]= useState({})
  const fetch=async()=>{
    try{
      const data = await getUserById(id)
      setUser(data)
    }
    catch(err){
        alert(err.res?.data?.message)
    }
  }
  useEffect(()=>{fetch()},[id])
  return (
   <>
    <h1>User Details</h1>
        <h2>Name - {user.name}</h2>
        <h3>Email - {user.email}</h3>
   </>
  )
}

export default UserDetails

