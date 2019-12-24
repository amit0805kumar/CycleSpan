import React, { useState, useEffect } from 'react'
import instaSvg from '../../images/003-instagram.svg'
import fbSvg from '../../images/002-facebook.svg'
import youtubeSvg from '../../images/001-youtube.svg'
import { addProfile } from '../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";
import { getCurrentProfile } from '../../actions/profile'

const ProfileEditForm = ({ getCurrentProfile, addProfile, history, profile: { profile, loading } }) => {


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
    });
    useEffect(() => {
        // getCurrentProfile()
        setData({
            dob: loading || !profile.dob ? '' : profile.dob,
            gender: loading || !profile.gender ? '' : profile.gender,
            number: loading || !profile.number ? '' : profile.number,
            address: loading || !profile.location.address ? '' : profile.location.address,
            pin: loading || !profile.location.pin ? '' : profile.location.pin,
            state: loading || !profile.location.state ? '' : profile.location.state,
            country: loading || !profile.location.country ? '' : profile.location.country,
            youtube: loading || !profile.social || !profile.social.youtube ? '' : profile.social.youtube,
            facebook: loading || !profile.social || !profile.social.facebook ? '' : profile.social.facebook,
            instagram: loading || !profile.social || !profile.social.instagram ? '' : profile.social.instagram,
            aadhar: loading || !profile.aadhar ? '' : profile.aadhar,
            pan: loading || !profile.pan ? '' : profile.pan
        })

    }, [loading, profile])



    if (!profile) {
        return <Redirect to="/dashboard" />
    }
    const onChange = e => setData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const { gender, number, address, state, country, youtube, facebook, instagram, pin, aadhar, pan } = formData

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

ProfileEditForm.prototype = {
    addProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
})
export default connect(mapStateToProps, { addProfile, getCurrentProfile })(ProfileEditForm)
