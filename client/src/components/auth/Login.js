import React, { useState } from 'react'
import topSvg from '../../images/topZigZag.svg'
import bottomSvg from '../../images/bottomZigZag.svg'
import { Link } from 'react-router-dom'


const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    return (
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
                <form action="">
                    <h1>Login</h1>
                    <input type="email" placeholder="Email" required name="email" value={email} onChange={e => onChange(e)} />
                    <input type="password" placeholder="Passoword" required name="password" value={password} onChange={e => onChange(e)} />
                    <button type="Submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
