import React from 'react'


export default function Login() {
  return (
    <div>
        
          <h1>Login</h1>
        <form className='form-control'>
           <div className='col-6'>
            <input className='form-control '
             type="text" placeholder='userName'/> <br/>
            <input className='form-control' 
            type="password" placeholder='password'/> <br/>
             <button className='btn btn-primary btn-lg'>Login</button>
             </div>
        </form>
    </div>
  )
}
