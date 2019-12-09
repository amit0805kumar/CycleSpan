import {
    GET_PROFILE,
    PROFILE_ERROR,
    UPDATED_PROFILE,
    CLEAR_PROFILE
} from '../actions/types'

const intialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function (state = intialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PROFILE:
        case UPDATED_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case PROFILE_ERROR:
            return {
                ...state,
                profile: null,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                loading: false
            }
        default:
            return state

    }
}