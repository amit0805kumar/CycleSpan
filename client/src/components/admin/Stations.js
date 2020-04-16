import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {deleteStation} from '../../actions/admin'

const Stations = ({ stations, addStation, deleteStation }) => {
    return (
        <div className="all__stations table__container">
            <div className="heading">
                <div className="text">All stations</div>
                <div className="btn" id="addStations" onClick={()=>addStation(2)}>
                    <div className="icon">+</div>
                    <div className="content">Add</div>
                </div>
            </div>
            <div className="table">
                <ul className="row head allStations">
                    <li className="num"></li>
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
                        return <ul className="row content allStations" key={index}>
                            <li className="num">{index + 1}.</li>
                            <li>{station.address}</li>
                            <li>{station.pin}</li>
                            <li className="cycleDetails">{station.country}</li>
                            <li>{station.code}</li>
                            <li>{station.state}</li>
                            <li>{station.city}</li>
                            <li><span className="del" onClick={()=>deleteStation(station.code)}>Delete</span></li>
                        </ul>
                    }) : <React.Fragment></React.Fragment>
                }


            </div>
        </div>
    )
}

Stations.propTypes = {
   deleteStation: PropTypes.func.isRequired
}

export default connect(null, {deleteStation})(Stations)
