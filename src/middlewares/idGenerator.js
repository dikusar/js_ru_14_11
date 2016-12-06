// import { Map } from 'immutable'

function getId (collection) {
	return collection.reduce( (maxId, collectionElement) => {
		return Math.max(collectionElement.id, maxId)
	}, -1 ) + 1
}

export default store => next => action => {
 //TODO: use getId function to generate id for some store property
}