const {createStore, combineReducers} = require('redux')
const {handleAction, createActions, combineActions} = require('redux-actions')

const [PLUS, LESS] = ['plus', 'less']

let {plus, less} = createActions({
    [PLUS]: (payload) => payload,
    [LESS]: (payload) => -payload
})

const reducer = handleAction(
    combineActions(plus, less),
    (state, {payload}) => state + payload,
    20
)

const reducers = combineReducers({counter: reducer})

const store = createStore(reducers)

console.log(store.getState())
store.dispatch(plus(100))
console.log(store.getState())