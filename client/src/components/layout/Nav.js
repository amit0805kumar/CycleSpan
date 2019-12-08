import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <Fragment>
            <nav className="nav">
                <div className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/">Cycles</Link>
                    <Link className="link" to="/">Stations</Link>
                    <Link className="link" to="/">Help</Link>
                </div>
            </nav>
        </Fragment>
    )
}


export default Nav; 