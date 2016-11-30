import { SELECT_ARTICLE, DELETE_ARTICLE } from '../constants'

export default (selectedState = [], action) => {
    const { type, payload }=action
    
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selected
            break
    }

    switch (type) {
        case DELETE_ARTICLE:
            return selectedState.filter(article => article.value != payload.articleId)
    }

    return selectedState
}