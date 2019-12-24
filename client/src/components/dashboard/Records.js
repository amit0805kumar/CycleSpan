import React from 'react'
import maps from "../../images/maps-and-flags.svg";
import Moment from 'react-moment'

const Records = ({ records }) => {

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
                                                <div className="loc__back">
                                                    <img src={maps} alt="" />
                                                </div>
                                                <div className="text">
                                                    <div className="address">{record.pickupLocationCode}</div>
                                                    <div className="address">Ghaziabad</div>
                                                    <div className="address">Pincode - 201002</div>
                                                </div>
                                            </div>
                                            <div className="to">
                                                <div className="loc__back">
                                                    <img src={maps} alt="" />
                                                </div>
                                                <div className="text">
                                                    <div className="address">{record.dropLocationCode}</div>
                                                    <div className="address">Ghaziabad</div>
                                                    <div className="address">Pincode - 201002</div>
                                                </div>
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


export default Records
