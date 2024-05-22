import React from 'react'
import github from '../assets/github.png'
import insta from '../assets/instagram.png'
import link from '../assets/linkedin.png'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />

        <div className='social-icons'>
            <img src={github} alt="" />
            <img src={insta} alt="" />
            <img src={link} alt="" />
        </div>

        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>

        <div className="blure blure-footer-1"></div>
        <div className="blure blure-footer-2"></div>
    </div>
  )
}

export default Footer
