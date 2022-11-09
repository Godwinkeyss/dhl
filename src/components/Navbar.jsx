import React from 'react'
import './navbar.css'
import Img from './dhl-logo-1024x768-removebg-preview.png'

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="nav-top">
        <div className="img">
            <img src="https://th.bing.com/th/id/OIP.nlx2RVHBCiLMJgD5P1FxtgHaDt?pid=ImgDet&rs=1" alt="" />
        </div>
        <div className="location">
            <span>You are in</span> <span><b>Nigeria</b></span>
            <div className="btn">
                <button>Stay on this site</button> <span>or</span>
            </div>
        </div>
        <div className="nav-button">
            <button>Select a different location</button>
        </div>
    </div>
    <div className="nav-bottom">
        <div className="bottom-top">
        <div className="left">
            <img src={Img} alt="gmg" />
        </div>
        <div className="right">
            <ul>
                <li><i class="fa-solid fa-circle-exclamation"></i></li>
                <li className='one'>Alerts(1)</li>
                <li>Contact Us</li>
                <li>Portal Login</li>
                <li><i class="fa-sharp fa-solid fa-globe"></i></li>
                <li className='one'>Nigeria</li>
                <li>En</li>
                <li><i class="fa-solid fa-magnifying-glass"></i></li>
                <li className='one'>Search</li>
            </ul>
        </div>
        </div>
        <div className="bottom-bottom">
        <div className="tracker-line">
            <ul>
                <li>Track</li>
                <i class="fa-solid fa-angle-down"></i>
                <li>All products & solutions</li>
                <i class="fa-solid fa-angle-down"></i>
                <li>Our Divisions</li>
                <i class="fa-solid fa-angle-down"></i>
                <li>Industry Sections</li>
                <li>Insights and Innovations</li>
                <li>Careers</li>
                <li>Press</li>
                <li>About Us</li>
                <i class="fa-solid fa-angle-down"></i>
            </ul>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar