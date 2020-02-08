import React, { useEffect } from 'react'
import settingSvg from '../../images/setting.svg'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ActiveOtp from './ActiveOtp'
import ActiveRides from './ActiveRides'
import Cycles from './Cycles'
import Records from './Records'
import Stations from './Stations'
import Availables from './Availables'


import { getAllRecords, getAllCycles, getAllStations, getAllAvailables, getAllOtps, getAllActiveRides } from '../../actions/admin'

const Admin = ({ logout, getAllRecords, admin, getAllCycles, getAllStations, getAllAvailables, getAllOtps, getAllActiveRides }) => {


    useEffect(() => {
        getAllRecords()
        getAllCycles()
        getAllStations()
        getAllAvailables()
        getAllOtps()
        getAllActiveRides()
    }, [getAllRecords, getAllCycles, getAllStations, getAllAvailables, getAllOtps, getAllActiveRides])

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

            <div className="active__section">
                <ActiveRides rides={admin.activeRides} />
                <ActiveOtp otps={admin.activeOtps} />
            </div>
            <div className="section__record">
                <Records records={admin.records} />
            </div>
            <div className="section__allcycles">
                <Cycles cycles={admin.cycles} />
            </div>
            <div className="section__allstations">
                <Stations stations={admin.stations} />
            </div>
            <div className="section__available" >
                <Availables availables={admin.availables} />
            </div>
        </React.Fragment>
    )
}

Admin.propTypes = {
    logout: PropTypes.func.isRequired,
    getAllRecords: PropTypes.func.isRequired,
    admin: PropTypes.object.isRequired,
    getAllCycles: PropTypes.func.isRequired,
    getAllStations: PropTypes.func.isRequired,
    getAllAvailables: PropTypes.func.isRequired,
    getAllOtps: PropTypes.func.isRequired,
    getAllActiveRides: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    admin: state.admin
})

export default connect(mapStateToProps, { logout, getAllRecords, getAllCycles, getAllStations, getAllAvailables, getAllOtps, getAllActiveRides })(Admin)
