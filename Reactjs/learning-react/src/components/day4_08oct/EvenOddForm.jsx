import React, { useState } from 'react'

const EvenOddForm = () => {
    let [num,setNum] = useState("")
    let [result,setResult] = useState("")
    const checkNum =()=>{
        if(num %2 ==0) {
            // alert("even no")
            setResult("even no")
        }
        else   {
                // alert("odd num")
                setResult("odd number")
        }           
    }
  return (
    <div className='container mt-5 col-6'>
        <h3>Even Odd Check</h3>
      <input type="text" className="form-control mb-3" 
      name="num" value={num} onChange={(e)=>{
        // console.log(e.target.value)
        setNum(e.target.value)
        }}/>
      <button type="button" class="btn btn-primary" onClick={checkNum}>check Number</button>
      <h3>{result}</h3>
    </div>
  )
}

export default EvenOddForm
