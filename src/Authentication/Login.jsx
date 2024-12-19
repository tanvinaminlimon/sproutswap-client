import React, { useState } from 'react'
import '../Authentication/login.css'
import app from '../firebase/firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from '../AuthProvider/AuthProvider';
import {  Link, useNavigate } from 'react-router-dom';

function Login() {

    const passwordRegex = /^.{6,}$/;
    const {userInfo, setUserInfo } = useAuth();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()

    const [message, setMessage] = useState('');


   

    const handleLoginUser = e =>{
        e.preventDefault();
        const password = e.target.password.value;
        const email = e.target.email.value;

        console.log(password);
        setMessage('');

        if (!passwordRegex.test(password)){
            // setPassError('Please give your correct email and password');
            setMessage('Please give your correct email and password');
            return;
        }


        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in 
              const user = userCredential.user;
    // ...
    navigate('/');
  })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setMessage(errorMessage);
  });


    }



    const handleGoogleLogin = () =>{
        console.log("goole click")
        signInWithPopup(auth, provider)
        .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
   
    const user = result.user;

    // console.log('credential',credential);
    // console.log('token',token);
    
    setUserInfo(user)
    navigate('/');

    console.log(userInfo)
  
  }).catch((error) => {
   
    const errorMessage = error.message;
    console.log("error message",errorMessage)
   
  });
    }
    
  return (
    <div className='login-section'>
         <div className="login-container">
            <div className="design">
                <div className="pill-1 rotate-45"></div>
                <div className="pill-2 rotate-45"></div>
                <div className="pill-3 rotate-45"></div>
                <div className="pill-4 rotate-45"></div>
            </div>
            <form onSubmit={handleLoginUser} className="login">
                <h2 className="titleSec">| Welcome to SproutSwap |</h2>
                <h3 className="title">Log in</h3>
                <div className="text-input">
                    <i className="ri-user-fill"></i>
                    <input type="email" name='email' placeholder="Username" required />
                </div>
                <div className="text-input">
                    <i className="ri-lock-fill"></i>
                    <input type="password" name='password' placeholder="Password" required />
                </div>
               {
                message &&   <p className='bg-white my-2 p-4 text-red-500'>{message}</p>
               }
                
                <button className="login-btn">LOGIN</button>
                <h5 className='mt-2 mb-2'>OR Login Using Google</h5>
                
                <a href="#" className="forgot">Forgot Username/Password?</a>
                <div className="create">
                    <Link to="/signup">Create Your Account</Link>
                
                    <i className="ri-arrow-right-fill"></i>
                </div>
            </form>
            <div className='text-center absolute bottom-[230px] right-[420px]'>
                   
                    <button onClick={handleGoogleLogin }><i class="fa-brands fa-google"></i></button>
                </div>
             
        </div>
    </div>
  )
}

export default Login