import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'
import { getCurrentProfile } from "../../actions/profile";
import Loader from '../layout/Loader'
import Admin from '../admin/Admin'
import DashboardProfile from './DashboardProfile'
import DashboardHome from './DashboardHome'
import Billing from "./Billing";
import Help from "./Help";
import { getRecord } from "../../actions/ride";
//Img
import logoutSvg from '../../images/logout.svg'


// eslint-disable-next-line

const Dashboard = ({ getRecord, logout, getCurrentProfile, profile: { profile, loading }, isAdmin, user, rideDate }) => {

    const [Type, setType] = useState({
        type: 'home'
    })
    const { type } = Type;
    useEffect(() => {
        getCurrentProfile()
        getRecord()

    }, [getCurrentProfile, getRecord])

    const content = () => {

        switch (type) {
            case 'home': return <DashboardHome info={rideDate} />
            case 'profile': return <DashboardProfile user={user} profile={profile} />
            case 'billing': return <Billing info={rideDate} />
            case 'help': return <Help />
            default: return <DashboardHome info={rideDate} />
        }

    }

    return (loading && !profile ? <Loader /> : (<React.Fragment>

        {
            profile == null ? <div className="create__profile">
                <div className="text"> Please create your profile</div>
                <div className="link">
                    <Link to='/profileForm' className="ln">Create Profile</Link>
                </div>
                <div className="link logout" onClick={() => logout()}>
                    <div className="ln">Logout</div>
                </div>
            </div> : < React.Fragment >
                    {
                        isAdmin ? <Admin /> :

                            <React.Fragment>
                                <div className="dashboard__container">
                                    <div className="sidebar">
                                        <div className="header">
                                            <Link to="/" className="heading">CYCLESPAN</Link>
                                            <div className="pic"></div>
                                            <div className="name">{profile.user.name}</div>
                                        </div>
                                        <hr />
                                        <div className="nav">
                                            <div className="link">
                                                <div className="ln" onClick={() => setType({ type: 'home' })}>Dashboard</div>
                                            </div>
                                            <div className="link">
                                                <div onClick={() => setType({ type: 'profile' })} className="ln">Profile</div>
                                            </div>
                                            <div className="link">
                                                <div onClick={() => setType({ type: 'billing' })} className="ln">Billing</div>
                                            </div>
                                            <div className="link">
                                                <div onClick={() => setType({ type: 'help' })} className="ln">Help</div>
                                            </div>

                                            <div className="logout" onClick={() => logout()}>
                                                <img src={logoutSvg} alt="Logout svg" className="img" />
                                                <p>Logout</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="content">
                                        {content()}
                                    </div>
                                </div>
                            </React.Fragment>


                    }

                </React.Fragment >

        }
    </React.Fragment>)
    )
}

Dashboard.propTypes = {
    logout: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    isAdmin: PropTypes.bool,
    getRecord: PropTypes.func.isRequired,
    rideDate: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    isAdmin: state.auth.isAdmin,
    user: state.auth.user,
    rideDate: state.ride
})
export default connect(mapStateToProps, { logout, getCurrentProfile, getRecord })(Dashboard)
