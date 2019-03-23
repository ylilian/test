import { combineReducers } from 'redux'
import changeCity from './setcity'

//合并所有reducer
const rootReducer = combineReducers({
    changeCity
})

export default rootReducer;