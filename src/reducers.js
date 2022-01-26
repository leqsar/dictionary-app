import {combineReducers} from 'redux'
import {
  RECEIVE_WORD,
  REQUEST_WORD,
  INPUT_WORD
} from './actions.js'

function choosenWord(state = '', action) {
  switch (action.type) {
    case INPUT_WORD:
      return action.word
    default:
      return state
  }
}

function word (
  state = {
    isFetching: false,
    wordInfo: {}
  },
  action
) {
  switch (action.type) {
    case REQUEST_WORD:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_WORD:
      return Object.assign({}, state, {
        isFetching: false,
        wordInfo: action.wordInfo
      })
    default:
      return state
  }
}

const vocApp = combineReducers({
  word,
  choosenWord
})

export default vocApp
