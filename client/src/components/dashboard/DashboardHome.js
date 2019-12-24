import React from 'react'
// import PropTypes from 'prop-types'
import Otpmanage from './Otpmanage'
import Cycles from './Cycles'
import Records from './Records'
import { connect } from 'react-redux'

import globe from '../../images/globe.svg'
import pinkTraingle from '../../images/pinkTraingle.svg'

const DashboardHome = ({ info: { records } }) => {


    return (
        <React.Fragment>
            <div className="background">
                <img src={globe} alt="" className="globe" />
                <img src={pinkTraingle} alt="" className="triangle1" />
                <img src={pinkTraingle} alt="" className="triangle2" />
            </div>
            <h3 className="heading">
                Simplest way to book a ride
            </h3>
            <Otpmanage />
            <Cycles />
            <Records records={records} />
        </React.Fragment>
    )
}

// DashboardHome.propTypes = {
// }

export default connect(null, {})(DashboardHome)
