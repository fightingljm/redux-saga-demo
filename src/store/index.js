import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
let middlewares = [logger, sagaMiddleware]

export default createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(mySaga)
