import React from 'react'
import '../Authentication/login.css'
import app from '../firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
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
                <h3 className="title">Log in</h3>
                <div className="text-input">
                    <i className="ri-user-fill"></i>
                    <input type="text" placeholder="Username" />
                </div>
                <div className="text-input">
                    <i className="ri-lock-fill"></i>
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-btn">LOGIN</button>
                <h5 className='mt-2 mb-2'>OR Login Using Google</h5>
                <div className='login-btn text-center'>
                   
                    <button ><i class="fa-brands fa-google"></i></button>
                </div>
                <a href="#" className="forgot">Forgot Username/Password?</a>
                <div className="create">
                    <a href="#">Create Your Account</a>
                    <i className="ri-arrow-right-fill"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login