import {
    GET_PROFILE,
    PROFILE_ERROR,
    ADD_PROFILE,
    ACCOUNT_DELETE,
} from './types'
import axios from 'axios'
import { setAlert } from './alert'
import {logout} from './auth'
export const getCurrentProfile = () => async dispatch => {


    try {
        const res = await axios.get('/api/profile/me')
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        var errors = error.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}
export const addProfile = (payload, history, update) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/profile', payload, config)
        dispatch({
            type: ADD_PROFILE,
            payload: res.data
        })
        dispatch(setAlert('Profile Updated', 'info'))
        history.push("/dashboard");

    } catch (error) {
        var errors = error.response.data.errors
        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
       if(!update){
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
       }

    }
}

export const deleteAccount = () => async dispatch => {
    try {
        await axios.delete('/api/profile')
        dispatch({
            type: ACCOUNT_DELETE
        })
        dispatch(logout())
    } catch (error) {
        dispatch(setAlert('Something went wrong!','danger'))
    }
}