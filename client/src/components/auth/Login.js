import React, { useState } from 'react'
import topSvg from '../../images/topZigZag.svg'
import bottomSvg from '../../images/bottomZigZag.svg'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../actions/auth'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Loader from '../layout/Loader'
const Login = ({ login, isAuthenticated, loading }) => {

    const [formData, setFormData] = useState({
        email: 'amit@gmail.com',
        password: '222222'
    });
    const { email, password } = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);

    };

    // if (loading) {
    //     {
    //         return <Loader />
    //     }
    // } else {
    //     if (isAuthenticated) {
    //         return <Redirect to='/dashboard' />
    //     }
    // }


    return loading ? <Loader /> : isAuthenticated ? <Redirect to='/dashboard' /> : (
        <div className="form__container">
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
                <h3>Don't have an account?</h3>
                <Link to="./register" className="create">Create Account</Link>

            </div>
            <div className="form">
                <form onSubmit={e => onSubmit(e)}>
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" required name="email" value={email} onChange={e => onChange(e)} />
                    <input type="password" placeholder="Passoword" required name="password" value={password} onChange={e => onChange(e)} />
                    <button type="Submit">Login</button>
                </form>
            </div>
        </div>
    )
}

Login.prototype = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    loading: PropTypes.bool
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
});
export default connect(mapStateToProps, { login })(Login)
