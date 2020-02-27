import React from 'react'
// import PropTypes from 'prop-types'

const ActiveOtp = ({ otps }) => {
    return (
        <div className="active__otp table__container">
            <div className="heading">Active OTPs</div>
            <div className="table">
                <ul className="row head activeOtp">
                    <li className="num"></li>
                    <li>User Id</li>
                    <li>OTP</li>
                </ul>
                {
                    otps.map((otp, index) => {
                        return <ul className="row content activeOtp" key={index}>
                            <li className="num">{index + 1}.</li>
                            <li>{otp.user}</li>
                            <li>{otp.otp} </li>
                        </ul>
                    })
                }
            </div>
        </div>
    )
}

// ActiveOtp.propTypes = {

// }

export default ActiveOtp
