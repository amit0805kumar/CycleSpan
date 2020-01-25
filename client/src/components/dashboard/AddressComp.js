import React from 'react'
import maps from "../../images/maps-and-flags.svg";


const AddressComp = ({ address }) => {
    return (
        <React.Fragment>
            <div className="loc__back">
                <img src={maps} alt="" />
            </div>
            <div className="text">
                <div className="address">{address.address}</div>
                <div className="address">{address.city}</div>
                <div className="address">Pincode - {address.pin}</div>
                <div className="address">{address.Country}</div>
            </div>
        </React.Fragment>
    )
}

export default AddressComp