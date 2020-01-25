import {
    GET_RECORD,
    GEN_OTP,
    OTP_ERROR,
    RECORD_ERROR,
    CANCEL_OTP,
    ACCEPT_OTP,
    ACCEPT_RIDEID,
    RIDEID_ERROR,
    GET_AVAILABLES,
    AVAILABLE_ERROR,
    GET_ACTIVE,
    ACTIVE_ERROR
} from './types.js'
import { setAlert } from './alert'
import axios from 'axios'
import { mailer } from './mailer'

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

export const getMyActiveRide = () => async dispatch => {
    try {
        const res = await axios.get('/api/activeRide/me')
        dispatch({
            type: GET_ACTIVE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ACTIVE_ERROR
        })
    }
}
export const getOtp = (receiver) => async dispatch => {

    try {
        const res = await axios.get('/api/active/getOtp')


        mailer('Cyclespan OTP', `<h1>OTP: ${res.data.otp}</h1>`, receiver)


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
        console.log(`
        <h2>Details:</h2>
        <ul>
            <li>Name: ${res.data.userName}</li>
            <li>RideId: ${res.data.rideId}</li>
            <li>Pickup Locationcode: ${res.data.pickupLocationCode}</li>
            <li>Cycle Model: ${res.data.cycleModel}</li>
            <li>Email: ${res.data.email}</li>
        </ul>
    `)
        mailer('Ride Booked(Cyclespan)', `
            <h2>Details:</h2>
            <ul>
                <li>Name: ${res.data.userName}</li>
                <li>RideId: ${res.data.rideId}</li>
                <li>Pickup Locationcode: ${res.data.pickupLocationCode}</li>
                <li>Cycle Model: ${res.data.cycleModel}</li>
            </ul>
        `, res.data.email)

        dispatch({
            type: ACCEPT_OTP,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: OTP_ERROR
        })
        console.log(error.response)
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

        const { email, userName, pickupLocationCode, cycleModel, rideId, dropLocationCode, totalTime, fare
        } = res.data
        //mailer here
        mailer('Ride Completed(Cyclelspan)', `
        <h2>Details:</h2>
        <ul>
            <li>Name: ${userName}</li>
            <li>Pickup location ${pickupLocationCode}</li>
            <li>Drop location: ${dropLocationCode}</li>
            <li>Cycle Model: ${cycleModel}</li>
            <li>Ride ID: ${rideId}</li>
            <li>Total Time: ${totalTime}Hr</li>
            <li>Total Fare: Rs. ${fare}</li>
        </ul>
        `, email)
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

export const getAvailables = () => async dispatch => {
    try {

        const res = await axios.get('/api/rides/')
        dispatch({
            type: GET_AVAILABLES,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: AVAILABLE_ERROR
        })
        dispatch(setAlert(error.response.data.message, 'danger'))
    }
}