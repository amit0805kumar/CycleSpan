import React, { useState } from "react";
import PropTypes from "prop-types";
import {addStation} from '../../../actions/admin'
import { connect } from "react-redux";

function AddStation({ close,addStation }) {
  const [formData, setFormData] = useState({
    address: "",
    state: "",
    country: "",
    city: "",
    pin: "",
    code: "",
  });
  const { address, state, country, city, pin, code } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    const onSubmit = async e => {
        e.preventDefault();
        addStation(formData)
        close()
    };
  return (
    <React.Fragment>
      <div className="form__container">
        <div
          className="close noselect"
          id="close"
          onClick={() => {
            close();
          }}
        >
          +
        </div>
        <form id="stations" onSubmit={e=>onSubmit(e)}>
          <h1>Add Stations</h1>
          <textarea
            className="address"
            cols="30"
            rows="3"
            placeholder="Address"
            required value={address} name="address" onChange={e=>onChange(e)}
          ></textarea>
          <input type="text" placeholder="City" className="field" required value={city} name="city" onChange={e=>onChange(e)}/>
          <input
            type="Number"
            placeholder="Location Code"
            className="field"
            required
            value={code} name="code" onChange={e=>onChange(e)}
          />
          <input
            type="Number"
            placeholder="Pincode"
            className="field"
            required
            value={pin} name="pin" onChange={e=>onChange(e)}
          />
          <input type="text" placeholder="State" className="field" required value={state} name="state" onChange={e=>onChange(e)}/>
          <input type="text" placeholder="Country" className="field" required value={country} name="country" onChange={e=>onChange(e)}/>
          <button type="Submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

AddStation.propTypes = {
    addStation: PropTypes.func.isRequired
};

export default connect(null,{addStation})(AddStation);
