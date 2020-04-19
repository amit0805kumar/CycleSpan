import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {deleteAccount} from '../../actions/profile'
import settingSvg from '../../images/setting.svg'
import { Link } from 'react-router-dom'
const DashboardProfile = ({ profile, user, deleteAccount }) => {



    return (
        <React.Fragment>
            
            <div className="section__profile">
                <div className="header">
                    <h1>Personal details</h1>
                    <Link className="edit" to="/profileEdit">
                        <img src={settingSvg} alt="" />
                    </Link>
                </div>
                <br />
                <hr />
                <div className="general">
                    <div className="name">{profile.user.name}</div>
                    <div className="email">{user.email}</div>

                </div>

                <div className="address">
                    <h1>Address</h1>
                    <div className="text">{profile.location.address}</div>
                    <div className="text">{profile.location.state}</div>
                    <div className="text">{profile.location.pin}</div>
                    <div className="text">{profile.location.country}</div>
                </div>
                <div className="phone">
                    <h1>Phone Number</h1>
                    <div className="text">+91 <span>{profile.number}</span></div>
                </div>

            <div className="deleteProfile">
                <div className="btn_deleteProfile noselect" onClick={()=>deleteAccount()} >
                    Delete your profile
                </div>
            </div>

            </div>
        </React.Fragment>
    )
}

DashboardProfile.propTypes = {
    deleteAccount: PropTypes.func.isRequired
}

export default connect(null,{deleteAccount})(DashboardProfile)
