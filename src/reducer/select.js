import { SELECT_ARTICLE } from '../constants'

export default (selectedState = null, action) => {
    const { type, payload }=action
    
    switch (type) {
        case SELECT_ARTICLE:
            return payload.selected
            break
    }

    return selectedState
}