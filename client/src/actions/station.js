import {
    GET_STATIONS,
    STATION_ERROR
} from './types'
import axios from 'axios'


export const getAllStations = () => async dispatch => {
    try {
        const res = await axios.get('/api/stations')
        dispatch({
            type: GET_STATIONS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: STATION_ERROR
        })
    }
}