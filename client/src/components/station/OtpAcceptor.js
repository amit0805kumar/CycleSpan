import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllStations } from '../../actions/station';
import { getCycles } from '../../actions/cycles';
import Loader from '../layout/Loader';


const OtpAcceptor = ({ station: { stations }, cycles: { cycles, loading }, getAllStations, getCycles }) => {
    useEffect(() => {
        getAllStations()
        getCycles()
    }, [getAllStations, getCycles])


    const [data, setdata] = useState({
        locCode: "",
        model: ""
    })
    const { locCode, model } = data

    return (
        locCode !== "" && model !== "" ? <React.Fragment>
            <div className="formContainer">
                <form>
                    <h1>Enter your OTP</h1>
                    <input type="number" className="field" />
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
                    <select name="cyclemodel" onChange={(e) => setdata({
                        ...data,
                        model: e.target.value
                    })} className="field">
                        <option value="">Select Cycle Model</option>
                        {cycles.map(cycle => {
                            return <option key={cycle.model} value={cycle.model}>{cycle.model}</option>
                        })}
                    </select>

                </form>
            </div></React.Fragment>))
}

OtpAcceptor.propTypes = {
    station: PropTypes.object.isRequired,
    getAllStations: PropTypes.func.isRequired,
    getCycles: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    station: state.station,
    cycles: state.cycles
})

export default connect(mapStateToProps, { getAllStations, getCycles })(OtpAcceptor)
