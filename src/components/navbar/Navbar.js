import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='main__nav'>
      <Link className='links' to='/'>
       <h1>Home</h1>
      </Link>
    </div>
  )
}

export default Navbar