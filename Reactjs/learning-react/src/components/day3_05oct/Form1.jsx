import React from 'react'

const Form1 = () => {
    const formSubmit =(e)=>{
        e.preventDefault()
    }
  return (
   <div className='container col-6 ' style={{marginTop:"200px"}}>
    <h2>Form Handling Demo</h2>
    <form onSubmit={formSubmit}>
        <div className='mb-3'>
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" name="email"/>
        </div>
        <div  className='mb-3'>
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" />
        </div>
        <button type="submit" className='btn btn-primary'>Login</button>
    </form>
   </div>
  )
}

export default Form1
