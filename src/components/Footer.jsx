import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div>
                <a href='/'>
                    <h1>WebSite</h1>
                </a>
            </div>
            <div>
                <a href="/" target={'_blank'}>Home</a>
                <a href="/about">About</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact">ContactUS</a>
            </div>
            <div>
                <a href="/" target={'_blank'}>Home</a>
                <a href="/about">About</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact">ContactUS</a>
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
