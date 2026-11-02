import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../apiservices.js";
import { Link } from "react-router";
import {BsEye, BsPen, BsTrash} from "react-icons/bs"
const UserList = ()=> {
  const [users,setUsers]= useState([])
  const fetch=async()=>{
    try{
      const data = await getUsers()
      console.log(data)
      setUsers(data)
    }
    catch(err){
        alert(err.res?.data?.message)
    }
  }
  useEffect(()=>{fetch()},[])
  const handleDelete=async(id)=>{
    if(window.confirm("Are you sure to delete")){
    try{
      await deleteUser(id)
      fetch()
    }
    catch(err){
        alert(err.res?.data?.message)
    }
    }
   
  }
  return (
    <div className="card mt-5 p-3">
      <div className="row">
        <div className="col">  <h2>All Users</h2></div>
        <div className="col">
          <Link type="button" class="btn btn-primary float-end" to="/adduser">Add USer
      </Link>
        </div>
      </div>   
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
               <th scope="col">Active</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {users.length==0 &&  <tr> 
              <td colSpan={5}>No User Found</td></tr>}
            {users.map((user,index)=><tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.isActive ? <span className="text-success">Active</span>:"Inactive"}</td>

              <td>
                <Link  type="button"class="btn btn-primary me-2" 
                to={`/user/details/${user._id}`}><BsEye/></Link>
                <Link  type="button"class="btn btn-success me-2" 
                to={`/edituser/${user._id}`}><BsPen/></Link>
                <button  type="button"class="btn btn-danger me-2" 
                onClick={()=>handleDelete(user._id)}><BsTrash/></button>
                
              </td>
              </tr>)}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

export default UserList