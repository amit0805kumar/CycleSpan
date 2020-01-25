import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Otpmanage from './Otpmanage'
import Cycles from './Cycles'
import Records from './Records'
import { connect } from 'react-redux'

import globe from '../../images/globe.svg'
import pinkTraingle from '../../images/pinkTraingle.svg'
import RideStatus from './RideStatus'
import { getMyActiveRide } from '../../actions/ride'

const DashboardHome = ({ info: { records }, getMyActiveRide, active }) => {

    useEffect(() => {
        getMyActiveRide()
    }, [getMyActiveRide])

    return (
        <React.Fragment>

            <div className="background">
                <img src={globe} alt="" className="globe" />
                <img src={pinkTraingle} alt="" className="triangle1" />
                <img src={pinkTraingle} alt="" className="triangle2" />
            </div>

            {
                active ? <RideStatus active={active} /> : <React.Fragment ></React.Fragment>
            }
            <h3 className="heading">
                Simplest way to book a ride
            </h3>
            <Otpmanage />
            <Cycles />
            <Records records={records} />
        </React.Fragment>
    )
}

DashboardHome.propTypes = {
    getMyActiveRide: PropTypes.func.isRequired,
    active: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    active: state.ride.active
})
export default connect(mapStateToProps, { getMyActiveRide })(DashboardHome)
