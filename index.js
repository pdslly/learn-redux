const {createStore, applyMiddleware} = require('redux')
const {INCREMENT, DECREMENT} = require('./types')
const reducer = require('./reducer')
const promiseMiddleware = require('redux-promise').default

const logMiddleware = ref => next => action => (console.log(action), next(action))
const store = createStore(reducer, applyMiddleware(promiseMiddleware, logMiddleware))

store.dispatch({type: INCREMENT, payload: 10})

store.dispatch({type: DECREMENT, payload: new Promise(resolve => setTimeout(resolve(10), 1000))})

console.log(store.getState())

setTimeout(() => {
    console.log(store.getState())
}, 2000)