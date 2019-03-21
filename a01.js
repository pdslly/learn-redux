const {createAction, handleAction, handleActions} = require('redux-actions')
const [INCREMENT, DESCRIMENT] = ['increment', 'descriment']

let action$1 = createAction(INCREMENT, payload => payload * 10)
let action$2 = createAction(DESCRIMENT, payload => payload * 10)
let handle = handleAction(INCREMENT, (state, {payload}) => state + payload, 0)
let actions = handleActions({
  [INCREMENT](state, {payload}) {
    return state + payload
  },
  [DESCRIMENT](state, {payload}) {
    return state - payload
  }
}, 200)

console.log(actions(undefined, action$1(10)))
console.log(actions(undefined, action$2(10)))
