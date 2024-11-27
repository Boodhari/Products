import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [count,setcount]=useState(0)
    useEffect(()=>{
       setTimeout(()=>{
        setcount((count)=>count+1)
       },1000) 
    })
  return (
    <div>
        <h4>{count}</h4>
    </div>
  )
}
