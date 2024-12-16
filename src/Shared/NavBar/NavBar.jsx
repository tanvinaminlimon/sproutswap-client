import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo_1.png"

const NavBar = () => {
    const navOptions = <>
      <li><Link to={`/`}>Home</Link></li>
      <li><Link to={`/dashboard`}>Dashboard</Link></li>
      
        <li><a>Admin</a></li>
    
    </>
  return (
    <div>
        <div className="navbar fixed z-20 max-w-screen-xl   bg-[#98a77c]">
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
  <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
  </div>
</div>
    </div>
  )
};

export default NavBar;
