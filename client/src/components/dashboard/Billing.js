import React from 'react'
// import PropTypes from 'prop-types'

const Billing = ({ info: { records } }) => {
    let total = 0
    records.map(record => {
        total += record.fare
    })
    return (
        <React.Fragment>

            <div className="section__billing">
                <div className="header">
                    <h1>Billing</h1>
                    <div className="total">Total Rs. <span>{total.toFixed(2)}</span></div>
                </div>
                <div className="bills__container">
                    <div className="row">
                        <div className="col">S. No.</div>
                        <div className="col">RideId</div>
                        <div className="col">Total Time</div>
                        <div className="col">Fare</div>
                    </div>
                    {
                        records.map((record, index) => {
                            return <React.Fragment key={index}>
                                <div className="bill" >
                                    <div className="col">{index + 1}</div>
                                    <div className="col">{record.rideId}</div>
                                    <div className="col">{record.totalTime.toFixed(2)}</div>
                                    <div className="col">{record.fare.toFixed(2)}</div>
                                </div>
                            </React.Fragment>
                        })
                    }

                </div>
            </div>
        </React.Fragment>
    )
}

// Billing.propTypes = {

// }

export default Billing
