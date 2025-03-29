import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <h1>Vitae Blog</h1>
      <div>
        <Link to='/' className='links'>Home</Link>
        <Link to='/' className='links'>Admin</Link>
      </div>
    </div>
  )
}

export default Header