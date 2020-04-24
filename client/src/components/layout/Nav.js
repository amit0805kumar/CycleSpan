import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
//scroll
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = () => {
  
    return (
        <Fragment>
            <nav className="nav">
                <div className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link 
                    to="cycles"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    className="link" to="/">Cycles</Link>
                    <Link className="link" to="/">Stations</Link>
                    <Link className="link" to="/">Help</Link>
                </div>
            </nav>
        </Fragment>
    )
}


export default Nav; 