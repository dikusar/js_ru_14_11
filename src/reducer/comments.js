import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS, START } from '../constants'
// import { normalizedComments } from '../fixtures'
import { Record } from 'immutable'
import { arrayToMap, ReducerState} from '../utils'

const CommentModel = Record({
    id: null,
    user: '',
    text: ''
})

const defaultComments = arrayToMap([], CommentModel)

const defaultState = new ReducerState({
	entities: defaultComments,
    loading: false
})

// const defaultState = defaultComments

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_COMMENTS + START:
        	return comments.set('loading', true)

		case LOAD_COMMENTS + SUCCESS:
        	return comments 
        			// = arrayToMap(response.records)
        		.set('entities', arrayToMap(response.records, CommentModel))
                .set('loading', false)
    }

    return comments
}