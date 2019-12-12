import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loader from '../layout/Loader'

const AdminRoute = ({ auth: { isAuthenticated, loading, isAdmin }, component: Component, ...rest }) => (

    < Route
        {...rest}
        render={
            props => !loading ? (
                !isAuthenticated ? (
                    <Redirect to='/login' />
                ) : (
                        !isAdmin ? <React.Fragment>
                            <h1>Unauthorised access. ERROR_403</h1>
                        </React.Fragment> :
                            <Component {...props} />

                    )
            ) : (
                    <Loader />
                )
        }
    />

)

AdminRoute.propTypes = {
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AdminRoute)
