
import { Todo } from '../model/index';
import { IAction } from './iaction';
import { ActionTarget } from './action-target';
import { Actions } from './actions';

export class ToggleTodoAnimated implements IAction<Todo>{
  target = ActionTarget.Todo

  constructor(private todo: Todo){
  }

  transform(oldTodo: Todo): Todo {
    return {
      ...oldTodo,
      blinks: !oldTodo.blinks
    }
  }

  static create(todo: Todo) {
    const thunk = function(dispatch){
        dispatch(Actions.toggleBlinking(todo))
        setTimeout(function(){
          dispatch(Actions.toggleTodo(todo))
          dispatch(Actions.toggleBlinking(todo))
        }, 5000)
      }
      thunk.type='THUNK'
      return thunk
  }
}
