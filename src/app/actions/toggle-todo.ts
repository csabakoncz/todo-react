import { Todo } from '../model/index';
import { IAction } from './iaction';
import { ActionTarget } from './action-target';

export class ToggleTodo implements IAction<Todo>{
  target = ActionTarget.Todo

  constructor(private todo: Todo){
  }

  transform(oldTodo: Todo): Todo {
    if (oldTodo.id != this.todo.id){
      return oldTodo
    }
    return {
      ...oldTodo,
      completed: !oldTodo.completed
    }
  }
}
