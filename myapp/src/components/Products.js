import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Products() {
    const [products , setproducts]=useState([])
    const api_url='http://127.0.0.1:8000/'
    useEffect(()=>{
        axios.get(api_url)
        .then((response)=>setproducts(response.data))
        .catch((error)=>console.error(error))
    })
  return (
    
    <div>
        <h1 className='text-center'>Latest Products</h1>
        <div className='row'>
            
            {products.map((products)=>(
                <div className='col-3 ms-2'>
        <div className="card ms-5" style={{width:"18rem"}}>
         
<div key={products.id}>
            <img src={`http://localhost:8000${products.Image}`} className="card-img-top" alt={products.Title}/>
            <div className="card-body">
                <h5 className="card-title">{products.Title}</h5>
                <p className="card-text">{products.Description}</p>
                <p className="card-text">{products.Price}</p>
                <button  className="btn btn-primary">Buy</button>
            </div>
        
        </div>
        </div>
        </div>
    ))}
   
    </div>
    </div>
   
  )
}
