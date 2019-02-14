const {combineReducers} = require('redux')
const {INCREMENT, DECREMENT} = require('./actions')

const reducer = combineReducers({
    [INCREMENT](state = 0, {type, payload = 0}) {
        return type === INCREMENT ? state + payload : state
    },
    [DECREMENT](state = 0, {type, payload = 0}) {
        return type === DECREMENT ? state - payload : state
    }
})

module.exports = reducer