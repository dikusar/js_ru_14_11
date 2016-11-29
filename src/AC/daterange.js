import { ADD_RANGE } from '../constants'

export function addRange (day) {
	return {
		type: ADD_RANGE,
		payload: {
			day
		}
	}
}