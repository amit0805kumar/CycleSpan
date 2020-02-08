import React from 'react'
import Moment from 'react-moment'

// import PropTypes from 'prop-types'
const Records = ({ records }) => {
    return (
        <div class="today__record table__container">
            <div class="heading">
                <div class="text">Today's Record</div>
                <div class="view">View All</div>
            </div>
            <div class="table">
                <ul class="row head today">
                    <li class="num"></li>
                    <li>Name</li>
                    <li>Pickup Location</li>
                    <li>Cyclemodel</li>
                    <li>Pickup Time</li>
                    <li>Ride ID</li>
                    <li>Drop Location</li>
                    <li>Drop Time</li>
                    <li>Total Time(Hrs)</li>
                    <li>Fare(INR)</li>
                </ul>
                {
                    records ? records.map((record, index) => {
                        return <ul class="row content today" key={index}>
                            <li class="num">{index + 1}. </li>
                            <li>{record.userName}</li>
                            <li>{record.pickupLocationCode}</li>
                            <li>{record.cycleModel}</li>
                            <li><Moment format="DD/MM/YYYY HH:mm">{record.pickupTime}</Moment></li>
                            <li>{record.rideId}</li>
                            <li>{record.dropLocationCode}</li>
                            <li><Moment format="DD/MM/YYYY HH:mm">{record.dropTime}</Moment></li>
                            <li>{record.totalTime.toFixed(2)}</li>
                            <li>{record.fare.toFixed(2)}</li>
                        </ul>
                    }) : <React.Fragment></React.Fragment>
                }

            </div>
        </div>
    )
}

// Records.propTypes = {

// }

export default Records
