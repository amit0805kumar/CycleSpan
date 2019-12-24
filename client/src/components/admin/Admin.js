import React from 'react'
import settingSvg from '../../images/setting.svg'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Admin = ({ logout }) => {
    return (
        <React.Fragment>
            <nav class="admin__nav">
                <div class="heading">Admin</div>
                <div class="details">
                    <div class="name">Amit Kumar</div>
                    <div class="edit__links" id="editLinks">
                        <div class="linkCont">
                            <Link class="link" to='/'>Manage Admins</Link>
                            <Link to="/profileEdit" className="link">Edit Profile</Link>
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
