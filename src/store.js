import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import vocApp from './reducers'

const loggerMiddleware = createLogger();

export default function storeConfig(preloadedState) {
  return createStore(
    vocApp,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )
}
