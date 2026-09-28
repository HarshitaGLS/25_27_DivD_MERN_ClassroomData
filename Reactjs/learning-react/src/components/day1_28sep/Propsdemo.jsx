import React from 'react'
//rafc
const Propsdemo = ({empid,isActive,hobbies,children}) => {
    //destructre props in parameter directly
  return (
   <>
    <h4>Props Demo</h4>
    {empid}<br/>
    {isActive ? 
    <>
     <p>Employee is active</p>
     <b>{hobbies}</b>
    </>
    : "Employee is not active"}
<br/>
    {/* {children} */}
    {children[0]}

   </>
  )
}

export default Propsdemo
