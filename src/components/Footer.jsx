import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div>
                <Link to='/'>
                    <h1>WebSite</h1>
                </Link>
            </div>
            <div>
                <Link to="/" target={'_blank'}>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">ContactUS</Link>
            </div>
            <div>
                <Link to="/" target={'_blank'}>Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">ContactUS</Link>
            </div>
        </div>
        <p>
        &copy;Copyright@2023
            VivekNikate
        </p>
    </footer>
  )
}

export default Footer
