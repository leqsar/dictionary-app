export const REQUEST_WORD = 'REQUEST_WORD'
export const RECEIVE_WORD = 'RECEIVE_WORD'
export const INPUT_WORD = 'INPUT_WORD'
export const GO_BACK = 'GO_BACK'
export const HANDLE_ERROR = 'HANDLE_ERROR'

export function inputWord(word) {
  return {
    type: INPUT_WORD,
    word
  }
 }

function handleError(error) {
   return {
     type: HANDLE_ERROR,
     error
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
        .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            dispatch(handleError(response.status));
            return null;
          }
        })
        .then(json => {
          if(json !== null) {
            dispatch(receiveWord(word, json))
          }      
        })
    }
  }
}
