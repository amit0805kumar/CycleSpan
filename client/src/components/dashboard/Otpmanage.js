import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import rightArrow from '../../images/rightArrow.svg'
import { getOtp } from '../../actions/ride'
import { cancelOtp } from '../../actions/ride'
const Otpmanage = ({ getOtp, cancelOtp, otp, user }) => {
    const genotp = async () => {
        await getOtp(user.email);
    }
    return (
        <React.Fragment>
            <div className="otpBtn" onClick={() => genotp()}>
                {
                    !otp ? <div className="text">
                        Get Otp
                </div> : <div className="text">
                            {otp}
                        </div>
                }

                <div className="icon">
                    <img src={rightArrow} alt="" />
                </div>
            </div>
            <h1 onClick={() => cancelOtp()} className="cancel btn">Cancel OTP</h1>
        </React.Fragment>
    )
}

Otpmanage.propTypes = {
    getOtp: PropTypes.func.isRequired,
    cancelOtp: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    otp: state.ride.otp,
    user: state.auth.user
})

export default connect(mapStateToProps, { getOtp, cancelOtp })(Otpmanage)
