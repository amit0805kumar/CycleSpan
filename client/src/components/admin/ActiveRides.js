import React from 'react'
// import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ActiveRides = ({ rides }) => {
    return (
        <div className="active__rides table__container">
            <div className="heading">Active Rides</div>
            <div className="table">

                <ul className="row head activeRides">
                    <li className="num"></li>
                    <li>Name</li>
                    <li>Pickup Location</li>
                    <li>Cyclemodel</li>
                    <li>Pickup Time</li>
                    <li>Ride Id</li>
                </ul>

                {
                    rides.map((ride, index) => {
                        return <ul className="row content activeRides" key={index}>
                            <li className="num">{index + 1}.</li>
                            <li>{ride.userName}</li>
                            <li>{ride.pickupLocationCode}</li>
                            <li>{ride.cycleModel}</li>
                            <li><Moment format="HH:mm">{ride.pickupTime}</Moment></li>
                            <li>{ride.rideId}</li>
                        </ul>
                    })
                }

            </div>
        </div>

    )
}

// ActiveRides.propTypes = {

// }

export default ActiveRides
