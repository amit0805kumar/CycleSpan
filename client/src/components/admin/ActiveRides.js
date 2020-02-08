import React from 'react'
// import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ActiveRides = ({ rides }) => {
    return (
        <div class="active__rides table__container">
            <div class="heading">Active Rides</div>
            <div class="table">

                <ul class="row head activeRides">
                    <li class="num"></li>
                    <li>Name</li>
                    <li>Pickup Location</li>
                    <li>Cyclemodel</li>
                    <li>Pickup Time</li>
                    <li>Ride Id</li>
                </ul>

                {
                    rides.map((ride, index) => {
                        return <ul class="row content activeRides">
                            <li class="num">{index + 1}.</li>
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
