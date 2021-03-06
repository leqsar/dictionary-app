import {combineReducers} from 'redux'
import {
  RECEIVE_WORD,
  REQUEST_WORD,
  INPUT_WORD,
  GO_BACK,
  HANDLE_ERROR
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
    wordInfo: {},
    error: ''
  },
  action
) {
  switch (action.type) {
    case REQUEST_WORD:
      return Object.assign({}, state, {
        isFetching: true
      })
    case HANDLE_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case RECEIVE_WORD:
      return Object.assign({}, state, {
        isFetching: false,
        wordInfo: action.wordInfo
      })
    case GO_BACK:
      return Object.assign({}, state, {
        wordInfo: action.word,
        error: ''
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
