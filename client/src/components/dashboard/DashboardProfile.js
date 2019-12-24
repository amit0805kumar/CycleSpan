import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import settingSvg from '../../images/setting.svg'
import { Link } from 'react-router-dom'
const DashboardProfile = ({ profile, user }) => {
    return (
        <React.Fragment>
            <div class="section__profile">
                <div class="header">
                    <h1>Personal details</h1>
                    <Link class="edit" to="/profileEdit">
                        <img src={settingSvg} alt="" />
                    </Link>
                </div>
                <br />
                <hr />
                <div class="general">
                    <div class="name">{profile.user.name}</div>
                    <div class="email">{user.email}</div>

                </div>

                <div class="address">
                    <h1>Address</h1>
                    <div class="text">{profile.location.address}</div>
                    <div class="text">{profile.location.state}</div>
                    <div class="text">{profile.location.pin}</div>
                    <div class="text">{profile.location.country}</div>
                </div>
                <div class="phone">
                    <h1>Phone Number</h1>
                    <div class="text">+91 <span>{profile.number}</span></div>
                </div>

            </div>
        </React.Fragment>
    )
}

// DashboardProfile.propTypes = {

// }

export default DashboardProfile
