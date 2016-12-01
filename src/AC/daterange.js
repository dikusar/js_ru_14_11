import { ADD_RANGE } from '../constants'
//объедени эти 2 AC
export function addRange (day) {
	return {
		type: ADD_RANGE,
		payload: {
			day
		}
	}
}
