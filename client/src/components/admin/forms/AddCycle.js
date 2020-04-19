import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addCycles} from '../../../actions/admin'
function AddCycle({close, addCycles}) {

    const [formData, setFormData] = useState({
        model: "",
        company: "",
        details: "",
        colour: "",
        gender: "",
        gears: ""
    })

    const onChange = e=> setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const {model, company, details, colour, gender, gears} = formData

    const onSubmit = async e => {
        e.preventDefault();
        addCycles(formData)
        close()
    };
    return (
        <React.Fragment>
              
                <div className="form__container">
                <div className="close noselect" id="close" onClick={()=>{close()}}>+</div>
                <form  onSubmit={e => onSubmit(e)} id="cycles">
                <h1>Add Cycles</h1>
                <input type="text" placeholder="Cycle Model" className="field" required value={model} name="model" onChange ={e=>{onChange(e)}}/>
                <input type="text" placeholder="Company" className="field" required value={company} name="company" onChange ={e=>{onChange(e)}}/>
                <input type="text" placeholder="Colour" className="field" required value={colour} name="colour" onChange ={e=>{onChange(e)}}/>
                <select  className="select" required value={gears} name="gears" onChange ={e=>{onChange(e)}}>
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
                            <input type="radio" name="gender" value="M" id="male" 
                            onChange ={e=>{onChange(e)}} 
                            checked={gender === 'M'} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="form__group"><input type="radio" name="gender" value="F" id="fem" onChange ={e=>{onChange(e)}} 
                        checked={gender === 'F'}/>
                            <label htmlFor="fem">Female</label></div>
                    </div>
                </div>
                <div className="uploader">
                    <h3>Choose an Image: </h3><input type="file" accept="image/png" className="upload__input" />
                </div>
                <textarea className="desc" cols="30" rows="3" placeholder="Description" required name="details" value={details} onChange={e=>onChange(e)}></textarea>
                <button type="Submit">Submit</button>

            </form>
                </div>
                
        </React.Fragment>
    )
}

AddCycle.propTypes = {
    addCycles: PropTypes.func.isRequired
}

export default connect(null, {addCycles})(AddCycle)

