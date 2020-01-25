import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment'


const RideStatus = ({ active, stations }) => {
    const getStationByCode = (code) => {
        const station = stations.filter(st => {
            return code == st.code
        })
        return station[0]
    }
    return (
        <React.Fragment>
            <div className="rideStatus">
                <div className="status__heading">
                    Current Ride Status
                    </div>
                <div className="status__content">
                    <div className="name">{active.userName}</div>
                    <div className="field">
                        <div className="field__heading">Pikup Location</div>
                        <div className="field__content">
                            {getStationByCode(active.pickupLocationCode).address}
                            <div>
                                {getStationByCode(active.pickupLocationCode).city}
                            </div>
                            <div>
                                {getStationByCode(active.pickupLocationCode).pin}
                            </div>
                            <div>
                                {getStationByCode(active.pickupLocationCode).state}
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field__heading">Pickup Date</div>
                        <div className="field__content">

                            <Moment format="YYYY/MM/DD HH:mm">{active.pickupTime}</Moment>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field__heading">Cycle Model</div>
                        <div className="field__content">
                            {active.cycleModel}
                        </div>
                    </div>
                    <div className="field">
                        <div className="field__heading">Ride ID</div>
                        <div className="field__content">
                            {active.rideId}
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

RideStatus.propTypes = {
    stations: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    stations: state.station.stations
})
export default connect(mapStateToProps, {})(RideStatus)
