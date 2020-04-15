import {
    GET_OTPS,
    ALLOTP_ERROR,
    GET_ALLACTIVES,
    ALLACTIVES_ERROR,
    GET_ALLSTATIONS,
    ALLSTATION_ERROR,
    GET__ALLCYCLES,
    ALLCYCLE_ERROR,
    GET__ALLAVAILABLES,
    ALLAVAIL_ERROR,
    GET_ALLRECORD,
    ALLRECORD_ERROR,
    ADD_CYCLES
} from './types'
import axios from 'axios'
import {setAlert} from './alert'

export const getAllRecords = () => async dispatch => {
    try {
        const res = await axios.get('/api/rides/records')
        dispatch({
            type: GET_ALLRECORD,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ALLRECORD_ERROR
        })
    }
}

export const getAllCycles = () => async dispatch => {
    try {
        const res = await axios.get('/api/cycles')
        dispatch({
            type: GET__ALLCYCLES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ALLCYCLE_ERROR
        })
    }
}

export const getAllStations = () => async dispatch => {
    try {
        const res = await axios.get('/api/stations')
        dispatch({
            type: GET_ALLSTATIONS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ALLSTATION_ERROR
        })
    }
}

export const getAllAvailables = () => async dispatch => {
    try {
        const res = await axios.get('/api/rides/')
        dispatch({
            type: GET__ALLAVAILABLES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ALLAVAIL_ERROR
        })
    }
}

export const getAllOtps = () => async dispatch => {
    try {
        const res = await axios.get('/api/active/otps')
        dispatch({
            type: GET_OTPS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ALLOTP_ERROR
        })
    }
}

export const getAllActiveRides = () => async dispatch => {
    try {
        const res = await axios.get('/api/activeRide/')
        dispatch({
            type: GET_ALLACTIVES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: ALLACTIVES_ERROR
        })
    }
}

//Add cycles
export const addCycles = (payload) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/cycles',payload, config)
        dispatch({
            type: ADD_CYCLES
        })
        dispatch(getAllCycles())
        dispatch(setAlert('Cycle added successfully!','success'))
    } catch (error) {
        console.log(error)
        dispatch({
            type: ALLCYCLE_ERROR
        })
        dispatch(setAlert('Somethong went wrong','danger'))
    }
}