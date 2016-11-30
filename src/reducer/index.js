import { combineReducers } from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import daterangeReducer from './daterange'
import selectReducer from './select'

export default combineReducers({
    articles: articleReducer,
    selected: selectReducer,
    count: counterReducer,
    range: daterangeReducer
})