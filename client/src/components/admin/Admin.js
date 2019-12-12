import React from 'react'
import settingSvg from '../../images/setting.svg'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { connect } from 'react-redux'

const Admin = ({ logout }) => {
    return (
        <React.Fragment>
            <nav class="admin__nav">
                <div class="heading">Admin</div>
                <div class="details">
                    <div class="name">Amit Kumar</div>
                    <div class="edit__links" id="editLinks">
                        <div class="linkCont">
                            <div class="link">Manage Admins</div>
                            <div class="link">Edit Profile</div>
                            <div class="link" onClick={e => logout()}>Logout</div>
                        </div>
                    </div>
                    <div class="edit">
                        <img src={settingSvg} alt="" />
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

Admin.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, { logout })(Admin)
