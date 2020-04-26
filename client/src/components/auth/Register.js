import React, { useState } from 'react'
import topSvg from '../../images/topZigZag.svg'
import bottomSvg from '../../images/bottomZigZag.svg'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types';
const Register = ({ setAlert, register }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Pasword do not match', 'danger')
        } else {
            register({ name, email, password })
        }
    }

    return (
        <div className="form__container">
      
            <div className="form">
                <form onSubmit={e => onSubmit(e)}>
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="Name" value={name} name="name" onChange={e => onChange(e)} required />
                    <input type="email" placeholder="Email" value={email} name="email" onChange={e => onChange(e)} required />
                    <input type="password" placeholder="Passoword" value={password} name="password" onChange={e => onChange(e)} required />
                    <input type="password" placeholder="Confirm Passoword" value={password2} name="password2" onChange={e => onChange(e)} required />
                    <button type="Submit">Sign Up</button>
                </form>
            </div>
            <div className="design">
                <div className="back">
                    <div className="top">
                        <img src={topSvg} alt="topzigzag" />

                    </div>
                    <div className="bottom">
                        <img src={bottomSvg} alt="topzigzag" />
                    </div>
                </div>

                <h1>Welcome Back!</h1>
                <h3>Already have an account?</h3>
                <Link to="/login" className="create">Login</Link>
                <Link to="/" className="homeBtn">Go Home</Link>
            </div>
        </div>
    )
}

Register.protoTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
}

export default connect(null, { setAlert, register })(Register)
