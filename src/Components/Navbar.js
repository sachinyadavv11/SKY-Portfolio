import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    
    <div className="navbar">
        <div className="logo">
            <h1><span>P</span>ortfolio</h1>
        </div>

        <div className="navlinks">
            <a href="#">Home</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
