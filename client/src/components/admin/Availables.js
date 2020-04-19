import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {updateAvailable} from '../../actions/admin'

const Availables = ({ availables, addAvailable, updateAvailable }) => {

const update = (opt,data) => {
    let payload={}
    payload.locationCode = data.locationCode
    payload.cycleModel = data.cycleModel
    payload.count = "1"
    if(opt === "inc"){
        payload.action = "inc"
    }else if(opt === "dec"){
        payload.action = "dec"
    }
    updateAvailable(JSON.stringify(payload))

}
    return (
        <div className="all__availables table__container">
            <div className="heading">
                <div className="text">All Available cycles</div>
                {/* <div className="search"><input type="text" placeholder="Search by ModelNo/LocationCode" />

                </div> */}
                <div className="btn" id="addAvailable" onClick={()=>addAvailable(3)}>
                    <div className="icon">+</div>
                    <div className="content">Add</div>
                </div>
            </div>
            <div className="table">
                <ul className="row head allAvailables">
                    <li>Model No.</li>
                    <li>Locaton</li>
                    <li>Count</li>
                    <li>Dec</li>
                    <li>Inc</li>
                </ul>
                {
                    availables ? availables.map((available, index) => {
                        if (available.available > 0) return <ul className="row content allAvailables" key={index}>
                            <li>{available.cycleModel}</li>
                            <li>{available.locationCode}</li>
                            <li>{available.available}</li>
                            <li><span className="dec" onClick={()=>update("dec",{
                                cycleModel: available.cycleModel,
                                locationCode: available.locationCode,
                            })}>-</span></li>
                            <li><span className="inc"  onClick={()=>update("inc",{
                                cycleModel: available.cycleModel,
                                locationCode: available.locationCode,
                            })}>+</span></li>
                        </ul>
                        else return <React.Fragment key={index}></React.Fragment>
                    }) : <React.Fragment></React.Fragment>
                }
            </div>
        </div>
    )
}

Availables.propTypes = {
    updateAvailable: PropTypes.func.isRequired
}

export default connect(null,{updateAvailable})(Availables)
