import { SELECT_ARTICLE } from '../constants'

export function selectArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: {
            selected
        }
    }
}