import axios from "axios"
const API_BASE_URL = "http://localhost:5000/api"

  const getUsers = async()=>{
    //   const res = await fetch(API_BASE_URL)
    //   const data = await res.json()
    //   return data

      const res = await axios.get(API_BASE_URL)
      return res.data
      }
   const addUser = async(data)=>{
    //   const res = await fetch(API_BASE_URL, {
    //     method:"POST",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(data)
    //   })
    //   return res
    const res = await axios.post(API_BASE_URL,data)
    return res.data
  }

   const getUserById = async(id)=>{
      const res = await axios.get(`${API_BASE_URL}/${id}`)
      return res.data
  }

 const updateUser = async(id,data)=>{
     const res = await axios.put(`${API_BASE_URL}/edit/${id}`,data)
    return res.data
}

 const deleteUser = async(id)=>{
      const res = await axios.delete(`${API_BASE_URL}/delete/${id}`)
      return res.data
  }

  export {getUsers,getUserById,addUser,updateUser,deleteUser}