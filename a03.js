const {createAction, handleAction} = require('redux-actions')
const {createStore, applyMiddleware} = require('redux')
const promiseMiddleware = require('redux-promise').default
const SYNCINCREMENT = 'syncIncrement'

let syncIncrement = createAction(
    'syncIncrement',
    payload => new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, payload)
    })
)

let reducer = handleAction(
    SYNCINCREMENT,
    (state, payload) => console.log(payload),
    10
)

let store = createStore(reducer, applyMiddleware(promiseMiddleware))

store.dispatch(syncIncrement(100))

console.log(store.getState())