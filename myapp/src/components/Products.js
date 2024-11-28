import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Products() {
    const [products , setproducts]=useState([])
    const api_url='http://127.0.0.1:8000/products/'
    useEffect(()=>{
        axios.get(api_url)
        .then((response)=>setproducts(response.data))
        .catch((error)=>console.error(error))
    })
  return (
    
    <div>
  <h1 className="text-center">Latest Products</h1>
  <div className="row">
    {products.map((product) => (
      <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div className="card border-primary rounded-3" style={{ width: "100%"  }}>
          <img
            src={`http://localhost:8000${product.Image}`}
            className="card-img-top"
            alt={product.Title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.Title}</h5>
            <p className="card-text">{product.Description}</p>
            <p className="card-text">{product.Price}</p>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
