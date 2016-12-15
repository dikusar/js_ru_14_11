import jquery from 'jquery'
import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const { callAPI, type, payload, querytParam, ...rest } = action
    // const querytParam ={ payload }
    if (!callAPI) return next(action)

    next({...rest, type: type + START})

    //NOT FOR PROD! just to simulate long call
    setTimeout(() => {
        // debugger
        jquery.get(callAPI, querytParam ? {querytParam} : null)
            .done(response => {
                // debugger
                next({...rest, response, type: type + SUCCESS})
            })
            .fail(error => {
                next({...rest, error, type: type + FAIL})
            })
    }, 1000)
}