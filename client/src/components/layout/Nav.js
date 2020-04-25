import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
//scroll
import { Link} from "react-scroll";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


const Nav = ({navFlag}) => {
  
    return (
        <Fragment>
         {  
         
        navFlag ? <nav className="nav">
                <div className="links">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link 
                    to="cycles"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    className="link">Cycles</Link>
                    <Link className="link" 
                     to="stations"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration= {500}>Stations</Link>
                    <Link className="link" 
                     to="footer"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration= {500}>Contact Us</Link>
                </div>
            </nav> : <React.Fragment></React.Fragment>
            
            }
        </Fragment>
    )
}

Nav.propTypes ={
    navFlag : PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    navFlag: state.route.navFlag
})
export default connect(mapStateToProps, {})(Nav); 