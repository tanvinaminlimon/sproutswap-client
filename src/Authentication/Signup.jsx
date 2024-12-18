import React from 'react'
import '../Authentication/login.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='login-section'>
         <div className="login-container">
            <div className="design">
                <div className="pill-1 rotate-45"></div>
                <div className="pill-2 rotate-45"></div>
                <div className="pill-3 rotate-45"></div>
                <div className="pill-4 rotate-45"></div>
            </div>
            <div className="login">
                <h2 className="titleSec">| Welcome to SproutSwap |</h2>
                <h3 className="title">Sign up</h3>
                <div className="text-input">
                    <i className="ri-user-fill"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="text-input">
                    <i className="ri-lock-fill"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-btn">sign up</button>
                <h3 className='mt-4'>Already have an account?</h3>
                <div className="create">
                
                    <Link to="/login">Go to Login </Link>
                  
                
                    <i className="ri-arrow-right-fill"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup