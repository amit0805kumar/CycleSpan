import {
    GET_CYCLES,
    CYCLE_ERROR,
} from "./types";
import axios from 'axios'
export const getCycles = () => async dispatch => {
    try {
        const res = await axios.get('/api/cycles')
        dispatch({
            type: GET_CYCLES,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: CYCLE_ERROR
        })

    }
}