import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'

//Img
import logoutSvg from '../../images/logout.svg'


const Dashboard = ({ logout, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Redirect to="/login" />
    }
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { logout })(Dashboard)
