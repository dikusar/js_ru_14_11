import { SELECT_ARTICLE, DELETE_ARTICLE, ADD_RANGE } from '../constants'
import { articles } from '../fixtures'
import { DateUtils } from 'react-day-picker'
//не стоит сюда примешивать сразу и логику фильтрации, просто сохраняй значения фильтров
let dateRange = {from: null, to: null}
export default (selectedState = [], action) => {
    const { type, payload }=action
    
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selected
        break
    }

    switch (type) {
        case DELETE_ARTICLE:
            return selectedState.filter(article => article.id != payload.articleId)
        break
    }

    switch (type) {
        case ADD_RANGE:
            dateRange = DateUtils.addDayToRange(payload.day, dateRange)
            const { to }=dateRange
            return (
                (to && selectedState) ? selectedState.filter(article => DateUtils.isDayInRange(article.date, dateRange) ? article : null) :
                        (to && articles) ? articles.filter(article => DateUtils.isDayInRange(article.date, dateRange) ? article : null) :
                            selectedState
            )

        break
    }

    return selectedState
}
