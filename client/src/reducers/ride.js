import {
    GET_RECORD,
    GEN_OTP,
    OTP_ERROR,
    RECORD_ERROR,
    CANCEL_OTP,
    ACCEPT_OTP,
    ACCEPT_RIDEID,
    RIDEID_ERROR
} from '../actions/types'

const intialState = {
    otp: null,
    active: null,
    actives: [],
    records: [],
    bill: 0,
    loading: true
}

export default function (state = intialState, actions) {
    const { payload, type } = actions
    switch (type) {
        case GET_RECORD:
            return {
                ...state,
                records: payload,
                loading: false
            }
        case RECORD_ERROR:
            return {
                ...state,
                records: [],
                loading: false
            }
        case GEN_OTP:
            return {
                ...state,
                otp: payload,
                loading: false
            }
        case OTP_ERROR:
            return {
                ...state,
                otp: null,
                loading: false
            }
        case CANCEL_OTP: return {
            ...state,
            otp: null,
            loading: false
        }
        case ACCEPT_OTP: return {
            ...state,
            otp: null,
            active: payload,
            loading: false
        }
        case ACCEPT_RIDEID:
        case RIDEID_ERROR:
            return {
                ...state,
                otp: null,
                active: null,
                loading: false
            }

        default:
            return state;
    }
}