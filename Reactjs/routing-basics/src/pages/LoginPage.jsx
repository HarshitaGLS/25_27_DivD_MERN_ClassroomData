import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const LoginPage = () => {
    const redirect = useNavigate()
    let [user,setUser] = useState({email:"",password:""})
    let [errors,setErrors]= useState({})
    const checkEmail =()=>{
        const pattern = /^[^\@\#]+\@[\w\d]+\.[\w]{2,3}$/
        if(user.email==""){
            setErrors((prevState)=>({...prevState,emailError:"email is required"}))
            return false
        }
        else if(!pattern.test(user.email)){
             setErrors((prevState)=>({...prevState,emailError:"Invalid Email"}))
             return false
        }
        else {
             setErrors((prevState)=>({...prevState,emailError:""}))
             return true
        }

    }
    const checkPwd=()=>{
        if(user.password==""){
            setErrors((prevState)=>({...prevState,pwdError:"password is required"}))
            return false
        }
        else {
             setErrors((prevState)=>({...prevState,pwdError:""}))
             return true
        }
    }
    const formSubmit =(e)=>{
        let em  =checkEmail()
        let pw = checkPwd()
        if(em==false || pw== false) 
            e.preventDefault()
        else 
        {
            // alert(JSON.stringify(user)) 
            redirect("/") 
        }
         
    }
  return (
   <div className='container col-6 ' style={{marginTop:"100px"}}>
    <h2>Login Page</h2>
    <form onSubmit={formSubmit}>
        <div className='mb-3'>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" name="email"
            value={user.email} 
            onChange={(e)=>setUser({...user,email:e.target.value})}
            onBlur={checkEmail}/>
            {errors?.emailError && <span className='text-danger'>{errors.emailError}</span>}
        </div>
        <div  className='mb-3'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" 
            value={user.password}
             onChange={(e)=>setUser({...user,password:e.target.value})}
             onBlur={checkPwd}/>
               {errors?.pwdError && <span className='text-danger'>{errors.pwdError}</span>}
     
        </div>
        <button type="submit" className='btn btn-primary'>Login</button>
    </form>
   </div>
  )
}

export default LoginPage