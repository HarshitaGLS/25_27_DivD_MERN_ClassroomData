import React from 'react'

const ListRendering = () => {
    let arr = ["aaa","bbb","ccc","ddd","eee"]
  return (
    <>
        {/* {arr.join("+")} */}
        {/* { arr.map((val,i)=><h3>{val}</h3>)} */}

        {
            arr.map((v,i)=>{
              return <h3 key={i}>{v}</h3>
            })
        }
    </>
  )
}

export default ListRendering
