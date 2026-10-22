import { useEffect, useState } from "react";

const UserList = ()=> {
  const [users,setUsers]= useState([])
  const getUsers = async()=>{
    try{
      const res = await fetch("http://localhost:5000/api")
      // console.log(res)
      const data = await res.json()
      setUsers(data)
    }
    catch(err){
      console.log(err)}
  }
  useEffect(()=>{getUsers()},[])
  return (
    <div className="card">
      <h2>All Users</h2>
      {/* {JSON.stringify(users)} */}
      <div
        class="table-responsive"
      >
        <table
          class="table table-primary"
        >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.length==0 &&  <tr> 
              <td colSpan={3}>No User Found</td></tr>}
            {users.map((user)=><tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default UserList