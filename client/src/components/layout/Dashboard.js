import React, { useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from "../../actions/profile";
//Img
import logoutSvg from '../../images/logout.svg'


const Dashboard = ({ logout, isAuthenticated, getCurrentProfile, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile()
    }, [getCurrentProfile])


    return !profile ? (<React.Fragment>
        <div className="create__profile">
            <div className="text"> Please create your profile</div>
            <div className="link">
                <Link to='/profileForm' className="ln">Create Profile</Link>
            </div>
            <div className="link logout" onClick={() => logout()}>
                <div className="ln">Logout</div>
            </div>
        </div>

    </React.Fragment>) : (
            < React.Fragment >
                <div className="dashboard__container">
                    <div className="sidebar">
                        <div className="header">
                            <Link to="/" className="heading">CYCLESPAN</Link>
                            <div className="pic"></div>
                            <div className="name">John Doe</div>
                        </div>
                        <hr />
                        <div className="nav">
                            <div className="link">
                                <Link to="/dashboard" className="ln">Dashboard</Link>
                            </div>
                            <div className="link">
                                <Link to="/profile" className="ln">Profile</Link>
                            </div>
                            <div className="link">
                                <Link to="/billing" className="ln">Billing</Link>
                            </div>
                            <div className="link">
                                <Link to="/help" className="ln">Help</Link>
                            </div>

                            <div className="logout" onClick={() => logout()}>
                                <img src={logoutSvg} alt="Logout svg" className="img" />
                                <p>Logout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    getCurrentProfile: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    profile: state.profile
})
export default connect(mapStateToProps, { logout, getCurrentProfile })(Dashboard)
