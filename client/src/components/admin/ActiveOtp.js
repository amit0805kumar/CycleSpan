import React from 'react'
// import PropTypes from 'prop-types'

const ActiveOtp = ({ otps }) => {
    return (
        <div class="active__otp table__container">
            <div class="heading">Active OTPs</div>
            <div class="table">
                <ul class="row head activeOtp">
                    <li class="num"></li>
                    <li>User Id</li>
                    <li>OTP</li>
                </ul>
                {
                    otps.map((otp, index) => {
                        return <ul class="row content activeOtp">
                            <li class="num">{index + 1}.</li>
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
