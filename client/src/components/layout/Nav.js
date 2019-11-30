import React, { Fragment } from 'react'

const Nav = () => {
    return (
        <Fragment>
            <nav className="nav">
                <div className="links">
                    <a className="link" href="#">Home</a>
                    <a className="link" href="#">Login</a>
                    <a className="link" href="#">Cycles</a>
                    <a className="link" href="#">Stations</a>
                    <a className="link" href="#">Help</a>
                </div>
            </nav>
        </Fragment>
    )
}


export default Nav; 