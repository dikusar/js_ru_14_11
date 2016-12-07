import { ADD_COMMENT } from '../constants'

export function addComment(newComment) {
    return {
        type: ADD_COMMENT,
        payload: {
            newComment
        }
    }
}