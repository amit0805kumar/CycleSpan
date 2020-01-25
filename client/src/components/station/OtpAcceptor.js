import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllStations } from '../../actions/station';
import { acceptOtp } from '../../actions/ride';
import { getAvailables } from '../../actions/ride';
import Loader from '../layout/Loader';
import Moment from 'react-moment'


const OtpAcceptor = ({ active, station: { stations, loading }, getAllStations, acceptOtp, getAvailables, availables }) => {
    useEffect(() => {
        getAllStations()
        getAvailables()
    }, [getAllStations, getAvailables])


    const [data, setdata] = useState({
        locCode: "",
        model: "",
        otp: "",
        selectedAvailable: []
    })
    let tempCode = "";
    const { locCode, model, otp, selectedAvailable } = data;


    return (
        locCode !== "" && model !== "" ? <React.Fragment>
            <div className="formContainer">
                <form onSubmit={e => {
                    e.preventDefault()
                    acceptOtp(locCode, model, otp)
                }}>
                    <h1>Enter your OTP</h1>
                    <input required type="number" className="field" onChange={(e) => setdata({
                        ...data,
                        otp: e.target.value
                    })} />
                    <input type="submit" value="Submit" className="btn" />
                </form>

                <React.Fragment>
                    {
                        (active) ?
                            <div className="summary">
                                <h1>Ride Summary</h1><span>
                                    (Also available on your profile)
                                </span>
                                <div className="container">
                                    <h3>Name: {active.userName} </h3>
                                    <h3>RideID: {active.rideId} (Please copy this)</h3>
                                    <h3>Pickup Location: {active.pickupLocationCode} </h3>
                                    <h3>Cyle Model: {active.cycleModel} </h3>
                                    <h3>Pickup Time: <Moment format="YYYY/MM/DD HH:mm">{active.pickupTime}</Moment> </h3>
                                </div>
                            </div> : <div></div>
                    }
                </React.Fragment>

            </div>
        </React.Fragment> : (loading ? <Loader /> : <React.Fragment>
            <div className="formContainer">
                <form>
                    <h1>Please select the location code</h1>
                    <select name="location" onChange={(e) => {
                        tempCode = e.target.value
                        setdata({
                            ...data,
                            locCode: e.target.value,
                            selectedAvailable: availables.filter(function (available) {
                                return available.locationCode == tempCode && available.available > 0
                            })
                        })
                    }} className="field">
                        <option>Select Code</option>
                        {stations.map(station => {
                            return <option key={station.code} value={station.code}>{station.code} ({station.city})</option>
                        })}
                    </select>
                    <select name="cyclemodel" onChange={(e) => setdata({
                        ...data,
                        model: e.target.value
                    })} className="field">
                        <option value="">Select Cycle Model</option>
                        {selectedAvailable.map(available => {
                            return <option key={available.cycleModel} value={available.cycleModel}>{available.cycleModel}</option>
                        })}
                    </select>

                </form>

            </div></React.Fragment>))
}

OtpAcceptor.propTypes = {
    station: PropTypes.object.isRequired,
    getAllStations: PropTypes.func.isRequired,
    acceptOtp: PropTypes.func.isRequired,
    getAvailables: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    station: state.station,
    availables: state.ride.availables,
    active: state.ride.active
})

export default connect(mapStateToProps, { getAllStations, acceptOtp, getAvailables })(OtpAcceptor)
