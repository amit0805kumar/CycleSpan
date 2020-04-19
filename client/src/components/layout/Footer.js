import React from 'react'
import cycleIcon from '../../images/cycle.svg'
import navIcon from '../../images/navigation.svg'
import fb from '../../images/002-facebook.svg'
import youtube from '../../images/001-youtube.svg'
import insta from '../../images/003-instagram.svg'
import logo from '../../images/cycleSpanLogo.svg'
import {Link} from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer">
            <img src={cycleIcon} alt="" className="cycle" />

            <div className="content">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="text">
                    <h1>Cyclespan</h1>
                    <div className="links">
                        <Link to="/dashboard" className="link">Privacy Policy</Link>
                        <Link to="/dashboard" className="link">Pricing</Link>
                        <Link to="/dashboard" className="link">Help</Link>
                    </div>

                </div>
            </div>
            <form className="form">
                <h1>Leave Feedback</h1>
                <input type="email" placeholder="Email" />
                <textarea name="" id="" cols="30" rows="2" placeholder="Feedback"></textarea>
                <button type="submit" title="Send" value="Submit">
                    <img src={navIcon} alt="" />
                </button>
            </form>
            <br />
            <hr />
            <div className="social">
                <a href="https://www.facebook.com/" className="a">
                    <img src={fb} alt="" />
                </a>
                <a href="https://www.facebook.com/" className="a">
                    <img src={youtube} alt="" />
                </a>
                <a href="https://www.facebook.com/" className="a">
                    <img src={insta} alt="" />
                </a>
            </div>
        </footer>
    )
}


export default Footer