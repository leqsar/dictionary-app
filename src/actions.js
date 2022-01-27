export const REQUEST_WORD = 'REQUEST_WORD'
export const RECEIVE_WORD = 'RECEIVE_WORD'
export const INPUT_WORD = 'INPUT_WORD'
export const GO_BACK = 'GO_BACK'

export function inputWord(word) {
  return {
    type: INPUT_WORD,
    word
  }
 }

 function goBack(shouldGoBack) {
   return {
     type: GO_BACK,
     shouldGoBack
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
  if(word === true) {
    return dispatch => dispatch(goBack(true));
  } else {
    return dispatch => {
      dispatch(requestWord(word));
      return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(json => dispatch(receiveWord(word, json)))
    }
  }
}
