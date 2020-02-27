import React from 'react'
import Moment from 'react-moment'

// import PropTypes from 'prop-types'
const Records = ({ records }) => {
    return (
        <div className="today__record table__container">
            <div className="heading">
                <div className="text">Today's Record</div>
                <div className="view">View All</div>
            </div>
            <div className="table">
                <ul className="row head today">
                    <li className="num"></li>
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
                        return <ul className="row content today" key={index}>
                            <li className="num">{index + 1}. </li>
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
