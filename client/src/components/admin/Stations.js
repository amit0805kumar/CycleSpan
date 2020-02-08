import React from 'react'
// import PropTypes from 'prop-types'

const Stations = ({ stations }) => {
    return (
        <div class="all__stations table__container">
            <div class="heading">
                <div class="text">All stations</div>
                <div class="btn" id="addStations">
                    <div class="icon">+</div>
                    <div class="content">Add</div>
                </div>
            </div>
            <div class="table">
                <ul class="row head allStations">
                    <li class="num"></li>
                    <li>Address</li>
                    <li>PIN</li>
                    <li>Country</li>
                    <li>Code</li>
                    <li>State</li>
                    <li>City</li>
                    <li>Delete</li>
                </ul>
                {
                    stations ? stations.map((station, index) => {
                        return <ul class="row content allStations" key={index}>
                            <li class="num">{index + 1}.</li>
                            <li>{station.address}</li>
                            <li>{station.pin}</li>
                            <li class="cycleDetails">{station.country}</li>
                            <li>{station.code}</li>
                            <li>{station.state}</li>
                            <li>{station.city}</li>
                            <li><span class="del">Delete</span></li>
                        </ul>
                    }) : <React.Fragment></React.Fragment>
                }


            </div>
        </div>
    )
}

// Stations.propTypes = {

// }

export default Stations
