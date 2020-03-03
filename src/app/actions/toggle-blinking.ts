import { Todo } from '../model/index';
import { IAction } from './iaction';
import { ActionTarget } from './action-target';

export class ToggleBlinking implements IAction<Todo>{
  target = ActionTarget.Todo

  constructor(private todo: Todo){
  }

  transform(oldTodo: Todo): Todo {
    if (oldTodo.id != this.todo.id){
      return oldTodo
    }
    return {
      ...oldTodo,
      blinks: !oldTodo.blinks
    }
  }
}
