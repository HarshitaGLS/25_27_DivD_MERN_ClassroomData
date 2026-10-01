import React, { useState } from 'react'
import "./counter1.css"
const Counter1 = () => {
    let [count, setCount] = useState(1)
  return (
    <div style={{color:"red", backgroundColor:"lightblue", padding:"20px"}}>
     <button type="button" className="class1"
     onClick={()=>setCount(count+1)}>Increase</button>
      <button type="button" onClick={()=>count > 1 && setCount(count-1)}>Decrease</button>
     <button type="button" onClick={()=>setCount(0)}>Reset</button>
     <button type="button" onClick={()=>setCount(-count)}>Change Sign</button>

      <h1>{count}</h1>
    </div>
  )
}

export default Counter1
