import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addAvailable} from '../../../actions/admin'


function AddAvailable({close, cycles,stations, addAvailable}) {

    const [formData, setFormData] = useState({
        location: "",
        locationCode: "",
        cycle: "",
        cycleModel: "",
        available: ""
    })

    const {locationCode, cycleModel, available} = formData

     const onChange = e => {
         if(e.target.name === "locationCode"){
             var data = ""
             stations.map(station => {
                 if(station.code+"" === e.target.value){
                     data = station._id
                 }
             })
             setFormData({
                 ...formData,
                 locationCode: e.target.value,
                 location: data
             })
         }else if(e.target.name === "cycleModel"){
            var data = ""
            cycles.map(cycle => {
                if(cycle.model === e.target.value){
                    data = cycle._id
                }
            })
            setFormData({
                ...formData,
                cycleModel: e.target.value,
                cycle: data
            })
         }else{
             setFormData({
                 ...formData,
                 [e.target.name]: e.target.value
             })
         }
     }

     
    const onSubmit = async e => {
        e.preventDefault();
        addAvailable(JSON.stringify(formData))
        close()
    };
    return (
        <React.Fragment>
            <div className="form__container">
            <div className="close noselect" id="close" onClick={()=>{close()}}>+</div>
                   <form onSubmit={e=>onSubmit(e)} id="available">
                <h1>Add Available Cycles</h1>
                <select   className="select"  required value={cycleModel} name="cycleModel" onChange={e=>onChange(e)}>
                    <option value="null" key="test">--Select Model--</option>
                    {cycles.map((data, index) => {
                        return <option value={data.model} key={index}>{data.model}</option> 
                    })}
                    
                </select>
                <select  className="select" required value={locationCode} name="locationCode" onChange={e=>onChange(e)}>
                    <option value="null" >--Select Location Code--</option>
                    {stations.map((data, index) => {
                        return <option value={data.code} key={index}>{data.code}</option> 
                    })}
                    
                   
                </select>
                <input type="number" placeholder="Count" className="field" required value={available} name="available" onChange={e=>onChange(e)}/>
                <button type="Submit">Submit</button>

            </form>
            </div>
        </React.Fragment>
    )
}

AddAvailable.propTypes = {
  cycles: PropTypes.array.isRequired,
  stations: PropTypes.array.isRequired,
  addAvailable: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    cycles: state.admin.cycles,
    stations: state.admin.stations
})

export default connect(mapStateToProps, {addAvailable})(AddAvailable)

