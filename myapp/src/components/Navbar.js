import React from 'react'
import {Outlet, Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
                   <Link to="/" className="navbar-brand" >My App</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                       aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <Link to="/" className="nav-link">Home</Link>
                           </li>
                           <li className="nav-item">
                               <Link to='/About' className="nav-link" >About</Link>
                           </li>
                           <li className="nav-item">
                               <Link to="/Login" className="nav-link">Login</Link>
                           </li>
                           <li className="nav-item">
                               <Link to='/States' className="nav-link" >States</Link>
                           </li>
                           <li className="nav-item">
                               <Link to='/Products' className="nav-link" >Products</Link>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
           <Outlet/>
    </div>
  )
}
