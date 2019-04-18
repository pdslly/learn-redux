const {createStore} = require('redux')
const {handleAction, createActions, combineActions} = require('redux-actions')

const [PLUS, LESS] = ['plus', 'less']

const {plus, less} = createActions({
    [PLUS]: (payload) => payload,
    [LESS]: (payload) => -payload
})

const reducer = handleAction(
    combineActions(plus, less),
    (state, {payload}) => state + payload,
    20
)

const store = createStore(reducer)

console.log(store.getState())
store.dispatch(plus(100))
console.log(store.getState())