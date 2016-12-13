import { Map } from 'immutable'
import { ADD_COMMENT } from '../constants'

const getId = () =>  Math.floor( ( 1 + Math.random() ) * 0x10000) 


export default store => next => action => {
    const { type }=action
    switch (type) {
        case ADD_COMMENT:
            let { newComment }=action.payload
            action.payload.newComment = Object.assign({}, newComment, {id: getId()})
            next(action)
        break

    }
}