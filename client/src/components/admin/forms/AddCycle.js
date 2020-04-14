import React from 'react'
import PropTypes from 'prop-types'

function AddCycle({close}) {
    return (
        <React.Fragment>
              
                <div className="form__container">
                <div className="close noselect" id="close" onClick={()=>{close()}}>+</div>
                <form action="" id="cycles">
                <h1>Add Cycles</h1>
                <input type="text" placeholder="Cycle Model" className="field" required />
                <input type="text" placeholder="Company" className="field" required />
                <input type="text" placeholder="Colour" className="field" required />
                <select name="" id="" className="select" required>
                    <option value="null">--Select Gears--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div className="radio" required>
                    <h3>Gender</h3>
                    <div className="radio__btns">
                        <div className="form__group">
                            <input type="radio" name="gender" value="M" id="male" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="form__group"><input type="radio" name="gender" value="F" id="fem" />
                            <label htmlFor="fem">Female</label></div>
                    </div>
                </div>
                <div className="uploader">
                    <h3>Choose an Image: </h3><input type="file" accept="image/png" className="upload__input" />
                </div>
                <textarea name="desc" className="desc" cols="30" rows="3" placeholder="Description" required></textarea>
                <button type="Submit">Submit</button>

            </form>
                </div>
                
        </React.Fragment>
    )
}

AddCycle.propTypes = {

}

export default AddCycle

