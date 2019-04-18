const {createStore, combineReducers, applyMiddleware} = require('redux')
const {handleAction, createActions, combineActions} = require('redux-actions')
const reduxPromise = require('redux-promise').default

const [PLUS, LESS] = ['plus', 'less']

let {plus, less} = createActions({
    [PLUS]: (payload) => new Promise((resolve, reject) => setTimeout(resolve, 2000, payload)),
    [LESS]: (payload) => -payload
})

const reducer = handleAction(
    combineActions(plus, less),
    (state, {payload}) => state + payload,
    20
)

const reduxLogger = ({getState}) => next => (action) => {
    let {type, payload} = action
    console.log(`type: [${type}], payload: [${payload}], state: [${JSON.stringify(getState())}]`)
    return next(action)
}

const reducers = combineReducers({counter: reducer})

const store = createStore(reducers, applyMiddleware(reduxPromise, reduxLogger))

console.log(store.getState())
store.dispatch(plus(100))
setTimeout(() => {
    console.log(store.getState())
}, 2000)