export const REQUEST_WORD = 'REQUEST_WORD'
export const RECEIVE_WORD = 'RECEIVE_WORD'
export const INPUT_WORD = 'INPUT_WORD'

export function inputWord(word) {
  return {
    type: INPUT_WORD,
    word
  }
 }

function requestWord(word) {
  return {
    type: REQUEST_WORD,
    word
  }
 }

function receiveWord(word, json) {
  return {
    type: RECEIVE_WORD,
    word,
    wordInfo: json[0]
  }
 }

export function fetchWord(word) {
  return dispatch => {
    dispatch(requestWord(word));
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWord(word, json)))
  }
}
