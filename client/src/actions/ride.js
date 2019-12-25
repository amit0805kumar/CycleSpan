import {
    GET_RECORD,
    GEN_OTP,
    OTP_ERROR,
    RECORD_ERROR,
    CANCEL_OTP,
    ACCEPT_OTP,
    ACCEPT_RIDEID,
    RIDEID_ERROR
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



export const acceptOtp = (locationCode, model, otp) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        locationCode: locationCode,
        cycleModel: model,
        otp: otp
    })
    try {
        const res = await axios.post('/api/activeRide/accept', body, config)
        dispatch({
            type: ACCEPT_OTP,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: OTP_ERROR
        })
        dispatch(setAlert(error.response.data.message, 'danger'))
    }
}

export const acceptRideId = (locationCode, rideId) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({
        dropLocationCode: locationCode,
        rideId: rideId
    })

    try {
        const res = await axios.post('/api/activeRide/complete', body, config)
        dispatch({
            type: ACCEPT_RIDEID,
        })
        dispatch(setAlert('Ride Completed', 'success'))
    } catch (error) {
        dispatch({
            type: RIDEID_ERROR
        })
        dispatch(setAlert(error.response.data.message, 'danger'))
    }
}