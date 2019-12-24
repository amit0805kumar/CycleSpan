import {
    GET_STATIONS,
    STATION_ERROR
} from '../actions/types'

const initialState = {
    stations: [],
    loading: true
}


export default function (state = initialState, actions) {
    const { payload, type } = actions
    switch (type) {
        case GET_STATIONS:
            return {
                ...state,
                stations: payload,
                loading: false
            }
        case STATION_ERROR:
            return {
                ...state,
                stations: [],
                loading: false
            }
        default:
            return state
    }
}