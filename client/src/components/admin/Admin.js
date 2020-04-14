import React, { useEffect, useState } from 'react'
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
import FormManager from './forms/FormManager'


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

    const [formdata, setData] = useState({
        close: true
    })
    const {close} = formdata
    // console.log(fdata.otp)
    const remove = ()=>{
        setData({
            formdata,
            close: true
        })
    }
    const openPop = ()=>{
        setData({
            ...formdata,
            close: false
        })
    }
    return (
        <React.Fragment>
            {
            close ? <React.Fragment></React.Fragment> : <FormManager close={remove}/>
            } 
            <nav className="admin__nav">
                <div className="heading">Admin</div>
                <div className="details">
                    <div className="name">Amit Kumar</div>
                    <div className="edit__links" id="editLinks">
                        <div className="linkCont">
                            <Link className="link" to='/'>Manage Admins</Link>
                            <Link to="/profileEdit" className="link">Edit Profile</Link>
                            <div className="link" onClick={e => logout()}>Logout</div>
                        </div>
                    </div>
                    <div className="edit">
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
                <Cycles cycles={admin.cycles} addCycle={openPop}/>
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
