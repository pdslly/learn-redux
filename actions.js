const {createAction, handleAction} = require('redux-actions')
const {INCREMENT, DECREMENT} = require('./types')

const reducer = handleAction(DECREMENT, (state = 0, {payload}) => state - payload, 0)
const increment = createAction(INCREMENT, payload => payload * 10)

const {payload: num} = increment(10)

console.log(reducer(10, {type: DECREMENT, payload: 10}))
