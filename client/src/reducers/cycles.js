import {
    GET_CYCLES,
    CYCLE_ERROR
} from '../actions/types'

const initialState = {
    cycles: [],
    loading: true
}

export default function (state = initialState, actions) {
    const { type, payload } = actions
    switch (type) {
        case GET_CYCLES:
            return {
                ...state,
                cycles: payload,
                loading: false
            }
        case CYCLE_ERROR:
            return {
                cycles: [],
                loading: false
            }
        default:
            return state
    }
}