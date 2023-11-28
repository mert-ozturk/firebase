import React from 'react'
import { Link } from 'react-router-dom'
import {auth} from "../config/Firebase"

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <div>
          <p>{auth.currentUser?.displayName}</p>
        </div>
    </div>
  )
}

export default Navbar