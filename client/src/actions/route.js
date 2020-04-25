import {
    SET_NAV
} from './types'

export const setNav = (bl) => dispatch =>{
    dispatch({
        type: SET_NAV,
        payload: bl
    })
}