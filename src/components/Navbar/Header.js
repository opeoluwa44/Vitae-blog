import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header-container'>
      <div className='top-bar'>{Date()}</div>
      <div className='title-block-container'>
        <div className='title-container'>
          <Link to='/' className='title'>Vitae Blog</Link>
          <p className='sub-title'>The people's blog</p>
        </div>
      </div>
      <nav className='navbar'>
        <button className='main-menu'>MAIN MENU</button>
        <div className='link-list'>
          <Link to='/' className='links'>Home</Link>
          <Link to='/privacy' className='links'>Cookie Privacy Policy</Link>
          <Link to='/contact' className='links'>Contact Us</Link>
          <Link to='/about' className='links'>About Us</Link>
          <Link to='admin' className='links'>Admin</Link>
        </div>
        <div className='search-button'>Search</div>
      </nav>
    </header>
  )
}

export default Header