import {  useEffect, useState } from "react"
import { addUser, getUserById, updateUser } from "../apiservices";
import { useNavigate, useParams } from "react-router";

const initialForm = { name: "", email: "", mobile: "",isActive: true}
const UserForm = ()=> {
  const [formData, setFormData] = useState(initialForm)
  const navigate = useNavigate()
  //edit
  const {id} = useParams()
   const fetch=async()=>{
        const data = await getUserById(id)
         setFormData(data)
    }
  useEffect(()=>{
    if(id){fetch()}
    else setFormData(initialForm)
  },[id])


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    if(!id){//add
       try{
      await addUser(formData)
      navigate("/users")
    }
    catch(err){ console.log(err.message)}   
    }
    else { //update
  try{
      await updateUser(id,formData)
      navigate("/users")
    }
    catch(err){ console.log(err.message)}   
    }
   

  };

  return (
    <>
      <h2>{id ? "Edit" :"Add New"} User</h2>
    <div className="container col-6">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
   <label className="form-label">Name</label>
        <input
          type="text"
          name="name" className="form-control"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        </div>
     <div className="form-group mb-3">
        <label className="form-label">Email</label>
        <input
          type="email" className="form-control"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
     </div>
      <div className="form-group mb-3">

      </div>


        <label className="form-label">Mobile</label>
        <input
          type="number" className="form-control"
          name="mobile"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <div class="form-check">
  <input class="form-check-input" type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}/>
  <label class="form-check-label" for="checkDefault">
Active 
  </label>
</div>

        <button type="submit" className="btn btn-primary">{id?"Update":"Add"} User</button>
      </form>
      </div>
    </>
  );
}

export default UserForm