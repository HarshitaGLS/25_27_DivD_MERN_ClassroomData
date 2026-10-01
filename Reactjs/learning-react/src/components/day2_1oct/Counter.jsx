import React, { useState } from 'react'

const Counter = () => {
    // let count = 1
    // let increaseCount = ()=>{
    //     count = count+1
    //     console.log(count)
    // }

    let [count, setCount] = useState(1)
    let increaseCount = ()=>{setCount(count+1) //count = count+1
    }
  return (
    <div>
      <button type="button" onClick={increaseCount}>Increase</button>
      <button type="button" onClick={()=>setCount(count-1)}>Decrease</button>
      {/* setCount((prev)=>prev-1) */}
    <button type="button" onClick={()=>setCount((prevCount)=>prevCount-5)}>Decrease by 5</button>
      <h1>{count}</h1>
    </div>
  )
}

export default Counter
