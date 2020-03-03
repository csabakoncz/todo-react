import {Store, createStore, applyMiddleware} from 'redux'
import { AppState } from '../model/index';
import { appReducer } from '../reducers/index';
import { INITIAL_STATE } from './initial-state';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const logger = createLogger()

export class AppStoreService {
  store: Store<AppState>
  constructor() {
    this.store = createStore(
      appReducer,
      INITIAL_STATE,
      applyMiddleware(logger, thunkMiddleware)
    )
  }
}
