import {
    GET_RECORD,
    GEN_OTP,
    OTP_ERROR,
    RECORD_ERROR,
    CANCEL_OTP
} from './types.js'
import { setAlert } from './alert'
import axios from 'axios'


export const getRecord = () => async dispatch => {
    try {
        const res = await axios.get('/api/rides/records/me')
        dispatch({
            type: GET_RECORD,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: RECORD_ERROR
        })
    }
}

export const getOtp = () => async dispatch => {

    try {
        const res = await axios.get('/api/active/getOtp')
        dispatch({
            type: GEN_OTP,
            payload: res.data.otp
        })
    } catch (error) {
        dispatch({
            type: OTP_ERROR
        })
    }
}

export const cancelOtp = () => async dispatch => {
    try {
        await axios.delete('/api/active/cancelOtp')
        dispatch({
            type: CANCEL_OTP
        })
        dispatch(() => setAlert('Otp cancelled', 'success'))
    } catch (error) {
        dispatch({
            type: OTP_ERROR
        })
    }
}

export const getAllLocations = () => async dispatch => {
    try {
        const res = await axios.get('/api/sation')
    } catch (error) {

    }
}