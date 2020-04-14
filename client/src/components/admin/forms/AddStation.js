import React from 'react'
import PropTypes from 'prop-types'

function AddStation({close}) {
    return (
       <React.Fragment>
            <div className="form__container">
            <div className="close noselect" id="close" onClick={()=>{close()}}>+</div>
            <form id="stations">
                <h1>Add Stations</h1>
                <textarea name="desc" className="address" cols="30" rows="3" placeholder="Address" required></textarea>
                <input type="text" placeholder="City" className="field" required /> 
                <input type="Number" placeholder="Location Code" className="field" required />
                <input type="Number" placeholder="Pincode" className="field" required />
                <input type="text" placeholder="State" className="field" required />
                <input type="text" placeholder="Country" className="field" required />
                <button type="Submit">Submit</button>

            </form>
            </div>
       </React.Fragment>
    )
}

AddStation.propTypes = {

}

export default AddStation

