import React from 'react'
import settingSvg from '../../images/setting.svg'
import PropTypes from 'prop-types'

const Admin = props => {
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
                            <div class="link">Logout</div>
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

}

export default Admin
