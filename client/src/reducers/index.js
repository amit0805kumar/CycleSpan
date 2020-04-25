import { combineReducers } from 'redux'

import alert from './alert'
import auth from './auth'
import profile from './profile'
import cycles from './cycles'
import ride from './ride'
import station from './station'
import admin from './admin'
import route from './route'

export default combineReducers({
    alert,
    auth,
    profile,
    cycles,
    ride,
    station,
    admin,
    route
})