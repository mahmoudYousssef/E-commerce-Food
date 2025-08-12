import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Model from './Model';
function Navbar() {
  const [isOpen, setIsOpen] =useState(false);
  const checkLogin = () => {
    setIsOpen(true)
  }
  const closeModel = () => {
    setIsOpen(false)
  }



  return (
  <>
<header>
  <nav className="navbar">
    <div className="logo">
<img src={logo} alt="Logo" />
    </div>
<ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">Recibes</a></li>
      <li><a href="/login">About</a></li>
      <li><a href="/contact">Contact</a></li>
      <li onClick={checkLogin}>login</li>
</ul>
  </nav>
</header>
{(isOpen)&& <Model onClose={closeModel}/>}
</>
  )
}

export default Navbar