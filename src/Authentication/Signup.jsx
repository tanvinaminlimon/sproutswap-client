import React, { useState } from 'react'
import '../Authentication/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
    const auth = getAuth();
    const navigate = useNavigate();
    // const [userEmail,setUserEmail] = useState('');
    // const [userPassword, setUserPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage,setSuccessMessage] = useState('');

    const handleFormSubmit = e =>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^.{6,}$/; // At least 6 characters
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
          
        // setUserEmail(email);
        // setUserPassword(password);

        setErrorMessage('');
        setSuccessMessage('');

        if(!passwordRegex.test(password)){
            console.log('true')
            setErrorMessage('The password must be atleast 6 characters long');
            return;
        }
       

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
             setSuccessMessage('User Created Successfully');
             navigate('/');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
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
            <form onSubmit={handleFormSubmit} className="login">
                <h2 className="titleSec">| Welcome to SproutSwap |</h2>
                <h3 className="title">Sign up</h3>
                <div className="text-input">
                    <i className="ri-user-fill"></i>
                    <input type="email" name='email' required placeholder="Username" />
                </div>
                <div className="text-input">
                    <i className="ri-lock-fill"></i>
                    <input type="password" name='password' required placeholder="Password" />
                   
                </div>
                {
                     errorMessage ?   <p className='bg-white my-2 p-4 text-red-500'>{errorMessage}</p> :  <p className='bg-white my-2 p-4 text-green-500'>{successMessage}</p>
                    }
                   
                <button className="login-btn">sign up</button>
                <h3 className='mt-4'>Already have an account?</h3>
                <div className="create">
                
                    <Link to="/login">Go to Login </Link>
                  
                
                    <i className="ri-arrow-right-fill"></i>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup