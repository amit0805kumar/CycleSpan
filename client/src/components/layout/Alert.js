import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
const Alert = ({ alerts }) => {
    return (
        <div className="alerts__container">
            {
                alerts !== null &&
                alerts.length > 0 &&
                alerts.map(alert => (
                    <div key={alert.id} className={`alert alert__${alert.alertType}`}>
                        <div className="msg">{alert.msg}</div>
                    </div>
                ))
            }

        </div>
    )
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}
const mapStateProps = state => ({
    alerts: state.alert
})
export default connect(mapStateProps)(Alert)
