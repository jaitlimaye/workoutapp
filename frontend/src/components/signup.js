import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Signup = () => {
  return (
    <div class ="Auth-form-container text-center">
    <img src={logo} width="72" height="57" class="Auth-img"/>
    <form className="Auth-form">
    <div className="Auth-form-content">
      
      <h4 >Sign Up</h4>
        <div class="form-floating mt-3">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mt-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
        <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
        
          <button class="btn btn-primary" type="submit">Sign Up</button>
    </div>
     
    </form>
 </div>
  )
}

export default Signup