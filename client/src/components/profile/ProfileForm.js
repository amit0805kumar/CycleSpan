import React, { useState } from 'react'
import instaSvg from '../../images/003-instagram.svg'
import fbSvg from '../../images/002-facebook.svg'
import youtubeSvg from '../../images/001-youtube.svg'
import { addProfile } from '../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';


const ProfileForm = ({ addProfile, history }) => {

    const [formData, setData] = useState({
        dob: '',
        gender: '',
        number: '',
        address: '',
        pin: '',
        state: '',
        country: '',
        youtube: '',
        facebook: '',
        instagram: '',
        aadhar: '',
        pan: ''
    })
    const onChange = e => setData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const { dob, gender, number, address, state, country, youtube, facebook, instagram, pin, aadhar, pan } = formData

    const onSubmit = async e => {
        e.preventDefault();
        addProfile(formData, history)
    };

    return (
        <React.Fragment>
            <div className="profileForm">
                <div className="header">
                    Let's set your profile
                </div>
                <div className="form">
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form__field">
                            <h3>Personal Info</h3>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="dob" className="dobLabel">Dob: </label>
                                    <input type="date" value={dob} name="dob" onChange={e => onChange(e)} id="dob" />
                                </div>
                                <div className="col">
                                    <input type="number" value={number} name="number" onChange={e => onChange(e)} placeholder="Phone number" />
                                </div>
                            </div>
                        </div>
                        <div className="form__field">
                            <span>Sex: </span>
                            <div className="radioBtns">
                                <div className="radio">
                                    <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={e => onChange(e)} />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={e => onChange(e)} />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="gender" id="other" value="other" checked={gender === 'other'} onChange={e => onChange(e)} />
                                    <label htmlFor="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="form__field">
                            <h3>Address:</h3>
                            <input type="text" value={address} name="address" onChange={e => onChange(e)} placeholder="Locality" /> <br />
                            <input type="number" value={pin} name="pin" onChange={e => onChange(e)} placeholder="PIN" />
                            <div className="row">
                                <div className="col">
                                    <input type="text" value={state} name="state" onChange={e => onChange(e)} placeholder="State" />
                                </div>
                                <div className="col">
                                    <input type="text" value={country} name="country" onChange={e => onChange(e)} placeholder="Country" />
                                </div>
                            </div>
                        </div>

                        <div className="form__field">
                            <h3>Social Links</h3>
                            <div className="social__links">
                                <div className="social">
                                    <div className="icon">
                                        <img src={instaSvg} alt="" />
                                    </div>
                                    <input type="text" value={instagram} name="instagram" onChange={e => onChange(e)} placeholder="Instagram" />
                                </div>
                                <div className="social">
                                    <div className="icon"><img src={fbSvg} alt="" /></div>
                                    <input type="text" value={facebook} name="facebook" onChange={e => onChange(e)} placeholder="Facebook" />
                                </div>
                                <div className="social">
                                    <div className="icon"><img src={youtubeSvg} alt="" /></div>
                                    <input type="text" value={youtube} name="youtube" onChange={e => onChange(e)} placeholder="Youtube" />
                                </div>
                            </div>
                        </div>

                        <div className="form__field">
                            <h3>Document</h3>
                            <p>Enter the number of any one ID.</p>
                            <div className="docs">
                                <input type="number" value={aadhar} name="aadhar" onChange={e => onChange(e)} placeholder="Aadhar" />
                                <input type="number" value={pan} name="pan" onChange={e => onChange(e)} placeholder="PAN" />
                            </div>
                        </div>

                        <button className="btn" type="submit"><span>Submit</span></button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

ProfileForm.prototype = {
    addProfile: PropTypes.func.isRequired
}

export default connect(null, { addProfile })(ProfileForm)
