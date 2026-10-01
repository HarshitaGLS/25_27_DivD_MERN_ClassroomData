import React from 'react'
import StateDemo from './StateDemo'

const Eventdemo = () => {
    function showAlert(){alert("button clicked")}
  return (
    <div>
        <button type="button" onClick={showAlert}>Event Demo</button> &emsp;
        <button type="button" onClick={()=>alert("button clicked")}>Event Demo</button>
        <button type="button" onClick={()=>{
            console.log("ekje")
            alert("button clicked")
        }}>Event Demo</button>
      <hr/>
        <StateDemo username="Harshita"/>    
    </div>
  )
}

export default Eventdemo
