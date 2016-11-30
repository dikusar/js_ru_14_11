import { ADD_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (rangeState = {from: null, to: null}, action) => {
	const { type, payload }=action

	switch (type) {
		case ADD_RANGE:
			return Object.assign({}, DateUtils.addDayToRange(payload.day, rangeState))
        break
	}

	return rangeState
}