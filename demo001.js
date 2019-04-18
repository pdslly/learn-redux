const {createStore, bindActionCreators} = require('redux')
const [PLUS, LESS] = ['plus', 'less']
const reducer = (defaultState = 0, action) => {
    let {payload, type} = action
    switch (type) {
        case PLUS:
            return defaultState + payload
        case LESS:
            return defaultState - payload
        default:
            return defaultState
    }
}

const store = createStore(reducer, 20)
const doAction = bindActionCreators((type, payload) => ({type, payload}), store.dispatch)

console.log(store.getState())
doAction(PLUS, 100)
console.log(store.getState())