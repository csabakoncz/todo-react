import { AppState } from '../model/index';
import { IAction } from './iaction';
import { ActionTarget } from './action-target';
import { TodoImpl } from '../model/todo';

export class AddTodo implements IAction<AppState>{
  target = ActionTarget.AppState

  constructor(private text: string){
  }

  transform(state: AppState): AppState {
    return {
      ...state,
      todos:[
        new TodoImpl(this.text)
      ].concat(state.todos)
    }
  }
}
