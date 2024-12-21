import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo_1.png"
import { useAuth } from '../../AuthProvider/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import TopBanner from '../../pages/TopBanner/TopBanner';

const NavBar = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const {userInfo,setUserInfo} = useAuth();
  const auth = getAuth();

    const navOptions = <>
      <li><Link className='text-white font-bold text-[15px] ' to={`/`}>Home</Link></li>
    
      {
        userInfo &&   <li><Link className='text-white font-bold text-[15px] ' to={`/dashboard`}>Dashboard</Link></li>
      }
      <li><Link className='text-white font-bold text-[15px] ' to={`/products`}>Subscription</Link></li>
      <li><Link className='text-white font-bold text-[15px] ' to={`/gallery`}>Gallery</Link></li>
      
    
    </>
   
  
    const handleLogOut = () =>{

      signOut(auth).then(() => {
        // Sign-out successful.
      
        setUserInfo(null);
      }).catch((error) => {
        // An error happened.
     
      });
    }
  return (
    <div>
      {isBannerVisible && <TopBanner onClose={() => setIsBannerVisible(false)} />}
        <div className={`navbar fixed z-20 max-w-screen-xl bg-[#98a77c] ${
          isBannerVisible ? "mt-[0px]" : "mt-0"
        }`}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navOptions}
        
      </ul>
    </div>
    
    <div className='flex items-center space-x-2'>
      <img  className='w-[100px]' src={logo} alt="" />
     
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
     { userInfo &&  <Link to='/ordertrack'><button className='bg-blue-200 p-4 rounded mr-4'>Order Track</button></Link>}
    {
      userInfo ? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            
            src={`${userInfo.photoURL}`} alt={`${userInfo.displayName}`} referrerPolicy="no-referrer"  />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {userInfo.displayName}
            <span className="badge">New</span>
          </a>
        </li>
        <li> <Link to="/dashboard">Dashboard</Link></li>
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div> :

<div className='mr-5'>

<Link to="/login"><button className='bg-orange-300 p-4 rounded mr-4'>Login</button></Link>
<Link to="/signup"><button className='bg-blue-200 p-4 rounded'>Sign Up</button></Link>
</div>

    }
    
  
  
  </div>
</div>
    </div>
  )
};

export default NavBar;

