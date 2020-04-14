import React from 'react'
import PropTypes from 'prop-types'

function AddAvailable({close}) {
    return (
        <React.Fragment>
            <div className="form__container">
            <div className="close noselect" id="close" onClick={()=>{close()}}>+</div>
                   <form action="" id="available">
                <h1>Add Available Cycles</h1>
                <select name="" id="" className="select" required>
                    <option value="null">--Select Model--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <select name="" id="" className="select" required>
                    <option value="null">--Select Location Code--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="number" placeholder="Count" className="field" required />
                <button type="Submit">Submit</button>

            </form>
            </div>
        </React.Fragment>
    )
}

AddAvailable.propTypes = {

}

export default AddAvailable

