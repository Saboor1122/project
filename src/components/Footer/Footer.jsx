import React from 'react'
import logo from '../../assets/logo.svg'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={logo} alt="" />
        <div className="list">
            <ul>
                <h4>Resources</h4>
                <li>Insights</li>
                <li>Blog</li>
                <li>Guides</li>
                <li>Help Center</li>
            </ul>
            <ul>
                <h4>Contact Us</h4>
                <li>General Enquiry</li>
                <li>Support</li>
                <li>Press</li>
            </ul>
            <ul>
                <h4>Company</h4>
                <li>About Us</li>
                <li>Pricing</li>
                <li>Careers</li>
                <li>Legal</li>
               
            </ul>
            <ul>
                <h4>Social</h4>
                <li>X (Twitter)</li>
                <li>Discord</li>
                <li>LinkedIn</li>
                <li>Youtube</li>
            </ul>
        </div>
        <h5>© 2024 Nansen.All Rights Reserved</h5>
    </div>
  )
}

export default Footer