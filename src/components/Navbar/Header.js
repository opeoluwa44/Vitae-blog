import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import useToggleType from '../../useToggleType'

const Header = () => {

  const {openMenu, openSearch, toggleMenu, toggleSearch} = useToggleType()

  const date = new Date().toLocaleDateString()
  return (
    <header className='header-container'>
      <div className='top-bar'>{date}</div>
      <div className='title-block-container'>
        <div className='title-container'>
          <Link to='/' className='title'>Vitae Blog</Link>
          <p className='sub-title'>The people's blog</p>
        </div>
      </div>
      <nav className='navbar'>
        <button className='main-menu' onClick={toggleMenu}>MAIN MENU</button>
        <div className='link-list'>
          <Link to='/' className='links'>Home</Link>
          <Link to='/privacy' className='links'>Cookie Privacy Policy</Link>
          <Link to='/contact' className='links'>Contact Us</Link>
          <Link to='/about' className='links'>About Us</Link>
          <Link to='admin' className='links'>Admin</Link>
        </div>

        <div className='search-wrap' style={{display:openSearch?'flex':'none'}}>
          <input className='search-input' type='text' placeholder='Search...'/>
          <button className='search'>Search</button>
        </div>

        <button className='search-button' onClick={toggleSearch}>Search</button>
      </nav>
      <div className='side-bar' style={{display:openMenu?'block':'none'}}>
          <Link to='/' className='links'  onClick={toggleMenu}>Home</Link>
          <Link to='/privacy' className='links' onClick={toggleMenu}>Cookie Privacy Policy</Link>
          <Link to='/contact' className='links' onClick={toggleMenu}>Contact Us</Link>
          <Link to='/about' className='links'  onClick={toggleMenu}>About Us</Link>
          <Link to='admin' className='links'  onClick={toggleMenu}>Admin</Link>
        </div>
    </header>
  )
}

export default Header