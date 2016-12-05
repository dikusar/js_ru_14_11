import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((previousValue, currentArticle)=> {
	return previousValue.set(currentArticle.id, currentArticle)
}, new Map({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)
        break
    }

    return articlesState
}