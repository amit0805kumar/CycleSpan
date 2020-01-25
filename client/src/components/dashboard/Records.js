import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddressComp from './AddressComp'

const Records = ({ records, stations }) => {


    const getStationByCode = (code) => {
        const station = stations.filter(st => {
            return code == st.code
        })
        return station[0]
    }

    return (
        <React.Fragment>
            <div className="records">
                <div className="records__heading">Your previous rides</div>
                <div className="records__container">
                    {

                        records.map((record, index) => {
                            return <React.Fragment key={index}>

                                <div className="record">
                                    <div className="record__header">
                                        <Moment format="YYYY/MM/DD">{record.pickupTime}</Moment> | Ride Id: {record.rideId}
                                    </div>
                                    <div className="record__content">

                                        <div className="locations">
                                            <hr />
                                            <div className="from">
                                                <AddressComp address={getStationByCode(record.pickupLocationCode)} />
                                            </div>
                                            <div className="to">
                                                <AddressComp address={getStationByCode(record.dropLocationCode)} />
                                            </div>
                                        </div>
                                        <div className="record__details">
                                            <h3>Cycle Details</h3>
                                            <div className="row">
                                                <div className="col">Model Name: {record.cycleModel}</div>
                                                <div className="col">Color: Red</div>
                                            </div>
                                            <div className="row">
                                                <div className="col">Company Name: Hero</div>
                                                <div className="col">Gears: Yes</div>
                                            </div>
                                            <div className="row">
                                                <div className="col">Charges : Rs. 80</div>
                                            </div>
                                        </div>

                                        <div className="record__time">
                                            <div className="field">Total time spent</div>
                                            <div className="value">{record.totalTime.toFixed(2)}Hrs</div>
                                        </div>
                                        <div className="record__cost">
                                            <div className="field">Total Cost</div>
                                            <div className="value">Rs. {record.fare.toFixed(2)}</div>
                                        </div>

                                    </div>
                                </div>
                            </React.Fragment>
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

Records.propTypes = {
    stations: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    stations: state.station.stations
})
export default connect(mapStateToProps, {})(Records)
