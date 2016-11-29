import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import daterangeReducer from './daterange'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    range: daterangeReducer
})