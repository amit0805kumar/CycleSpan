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
    ADD_CYCLES,
    DELETE_CYCLES,
    ADD_STATION,
    REMOVE_STATION,
    UPDATE_AVAILABlE,
    GET_ADMINS,
    GET_ADMINS_ERROR,
    GET_USERS_ERROR,
    GET_USERS
} from '../actions/types'

const initialState = {
    activeOtps: [],
    activeRides: [],
    cycles: [],
    stations: [],
    availables: [],
    records: [],
    users: [],
    admins: [],
    loading: true
}

export default function (state = initialState, actions) {
    const { payload, type } = actions
    switch (type) {
        case GET_ALLRECORD:
            return {
                ...state,
                records: payload,
                loading: false
            }
        case ALLRECORD_ERROR:
            return {
                ...state,
                records: null,
                loading: false
            }
        case GET__ALLCYCLES:
            return {
                ...state,
                cycles: payload,
                loading: false
            }
        case ALLCYCLE_ERROR:
            return {
                ...state,
                cycles: null,
                loading: false
            }
        case GET_ALLSTATIONS:
            return {
                ...state,
                stations: payload,
                loading: false
            }
        case ALLSTATION_ERROR:
            return {
                ...state,
                cycles: null,
                loading: false
            }
        case GET__ALLAVAILABLES:
            return {
                ...state,
                availables: payload,
                loading: false
            }
        case ALLAVAIL_ERROR:
            return {
                ...state,
                availables: null,
                loading: false
            }
        case GET_OTPS:
            return {
                ...state,
                activeOtps: payload,
                loading: false
            }
        case ALLOTP_ERROR:
            return {
                ...state,
                activeOtps: null,
                loading: false
            }
        case GET_ALLACTIVES:
            return {
                ...state,
                activeRides: payload,
                loading: false
            }
        case ALLACTIVES_ERROR:
            return {
                ...state,
                activeRides: null,
                loading: false
            }
        case ADD_CYCLES:
        case DELETE_CYCLES:
        case ADD_STATION:
        case REMOVE_STATION:
        case UPDATE_AVAILABlE:
            return {
                ...state,
                loading: false
            }
        case GET_USERS:
            return {
                ...state,
                users: payload,
                loading: false
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                loading: false,
                users: []
            }
        case GET_ADMINS:
            return {
                ...state,
                admins: payload,
                loading: false
            }
        case GET_ADMINS_ERROR:
            return {
                ...state,
                loading: false,
                admins: []
            }
        default:
            return state
    }
}