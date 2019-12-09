import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    ADMIN_ERROR,
    CHECK_ADMIN,
    LOGOUT
} from './types'
import { setAlert } from './alert'
import axios from 'axios'
import setAuthToken from '../util/setAuthToken'
//Load User
export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.get('/api/auth')
        const admin = await axios.get('/api/auth/checkAdmin')
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        if (admin.data) {
            dispatch({
                type: CHECK_ADMIN
            })
        } else {
            dispatch({
                type: ADMIN_ERROR
            })
        }
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
        dispatch({
            type: ADMIN_ERROR
        })
    }
}


//Register user 
export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser());
    } catch (error) {
        var errors = error.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

//Login user
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    } catch (error) {
        var errors = error.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: LOGIN_FAILED
        })
    }
}


//Logout and clear profile
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}