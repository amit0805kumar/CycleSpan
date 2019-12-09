import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    AUTH_ERROR,
    ADMIN_ERROR,
    CHECK_ADMIN,
    LOGOUT
} from '../actions/types'


const initialStata = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isAdmin: null,
    loading: true,
    user: null
}

export default function (state = initialStata, action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
        case LOGIN_FAILED:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }
        case CHECK_ADMIN:
            return {
                ...state,
                isAdmin: true,
                loading: false
            }
        case ADMIN_ERROR:
            return {
                ...state,
                isAdmin: false,
                loading: false
            }
        default:
            return state
    }
}