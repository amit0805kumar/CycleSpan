import {
   SET_NAV
} from '../actions/types'

const initialState = {
    navFlag: false
}

export default function (state = initialState, actions) {
    const {type, payload} = actions
    switch (type) {
        case SET_NAV:
            return {
            ...state,
            navFlag: payload
            }
        default: 
        return state
    }
}