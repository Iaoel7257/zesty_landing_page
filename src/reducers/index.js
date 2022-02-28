import { combineReducers } from 'redux'
import HomeState from './homeState'
import AboutState from './aboutState'
export const reducers = combineReducers({ HomeState, AboutState })
