import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../layout/Loader'

const PrivateRoute = ({ auth: { isAuthenticated, loading }, component: Component, ...rest }) => (

    < Route
        {...rest}
        render={
            props => !loading ? (
                !isAuthenticated ? (
                    <Redirect to='/login' />
                ) : (
                        <Component {...props} />
                    )
            ) : (
                    <Loader />
                )
        }
    />

)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
