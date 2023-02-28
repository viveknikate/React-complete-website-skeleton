import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = () => {
  return (
    <nav>
        <h1>
            <Link to={'/'}>WebSite</Link>
        </h1>
        <main>
            <Link to="/">Home</Link>
            <Link to="/About">AboutUS</Link>
            <Link to="/contact">ContactUS</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/services">Services</Link>
        </main>
    </nav>
  )
}

export default Header
