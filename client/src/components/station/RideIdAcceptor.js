import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllStations } from '../../actions/station';
import { acceptRideId } from '../../actions/ride';
import Loader from '../layout/Loader';


const RideIdAcceptor = ({ station: { stations, loading }, getAllStations, acceptRideId }) => {
    useEffect(() => {
        getAllStations()
    }, [getAllStations])


    const [data, setdata] = useState({
        locCode: "",
        rideId: ""
    })
    const { locCode, rideId } = data

    return (
        locCode !== "" ? <React.Fragment>
            <div className="formContainer">
                <form onSubmit={e => {
                    e.preventDefault()
                    acceptRideId(locCode, rideId)
                    setdata({
                        ...data,
                        locCode: "",
                        rideId: ""
                    })
                }}>
                    <h1>Enter your RideId</h1>
                    <input required type="text" className="field" onChange={(e) => setdata({
                        ...data,
                        rideId: e.target.value
                    })} />
                    <input type="submit" value="Submit" className="btn" />
                </form>
            </div>
        </React.Fragment> : (loading ? <Loader /> : <React.Fragment>
            <div className="formContainer">
                <form>
                    <h1>Please select the location code</h1>
                    <select name="location" onChange={(e) => setdata({
                        ...data,
                        locCode: e.target.value
                    })} className="field">
                        <option value="">Select Code</option>
                        {stations.map(station => {
                            return <option key={station.code} value={station.code}>{station.code} ({station.city})</option>
                        })}
                    </select>
                </form>
            </div></React.Fragment>))
}

RideIdAcceptor.propTypes = {
    station: PropTypes.object.isRequired,
    getAllStations: PropTypes.func.isRequired,
    acceptRideId: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    station: state.station
})

export default connect(mapStateToProps, { getAllStations, acceptRideId })(RideIdAcceptor)
