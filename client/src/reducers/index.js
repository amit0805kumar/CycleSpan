import { combineReducers } from 'redux'

import alert from './alert'
import auth from './auth'
import profile from './profile'
import cycles from './cycles'
import ride from './ride'
import station from './station'

export default combineReducers({
    alert,
    auth,
    profile,
    cycles,
    ride,
    station
})