import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../../Shared/NavBar/NavBar'

function SimpleLayout() {
  return (
    <div>
        <Outlet></Outlet>

    </div>
  )
}

export default SimpleLayout