import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Shared/NavBar/NavBar'

function SimpleLayout() {
  return (
    <div>
       <h1>Hello it a Simple Layout</h1>
       <h3>You know I work better than you</h3>
        <Outlet></Outlet>

    </div>
  )
}

export default SimpleLayout