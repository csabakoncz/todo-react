import {AppState} from '../model/index'
import {Action} from 'redux'
import { IAction, ActionTarget } from '../actions/index'

export const appReducer = function(state: AppState, action: Action<IAction<any>>){
  const appAction = action.type;

  if (appAction.target==ActionTarget.AppState){
    return appAction.transform(state)
  }
  else if (appAction.target==ActionTarget.Todo){
    return {
      ...state,
      todos: state.todos.map(t => appAction.transform(t))
    }
  }
  else{
    return state
  }
}
