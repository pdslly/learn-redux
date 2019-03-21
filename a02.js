const {createActions, handleAction, combineActions} = require('redux-actions')
const {createStore, combineReducers} = require('redux')
const [INCREMENT, DECREMENT] = ['increment', 'decrement']

let {increment, decrement} = createActions({
  INCREMENT: payload => payload,
  DECREMENT: payload => -payload
})

let reducer = handleAction(combineActions(increment, decrement), (state, {payload}) => state + payload, 100)

let store = createStore(combineReducers({counter: reducer}))

store.dispatch(increment(10))
store.dispatch(decrement(10))

console.log(store.getState())
