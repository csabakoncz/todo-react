import { Todo } from '../model/index';
import { AddTodo } from './add-todo';
import { TitleClick } from './title-click';
import { ToggleTodo } from './toggle-todo';
import { ToggleTodoAnimated } from './toggle-todo-animated';
import { ToggleBlinking } from './toggle-blinking';

export class Actions{
  static titleClick(){
      return {type: TitleClick.INSTANCE}
  }

  static addTodo(text: string){
    return {type: new AddTodo(text)}
  }

  static toggleTodoAnimated(todo: Todo){
    return ToggleTodoAnimated.create(todo)
  }

  static toggleTodo(todo: Todo){
    return {type: new ToggleTodo(todo)}
  }

  static toggleBlinking(todo: Todo){
    return {type: new ToggleBlinking(todo)}
  }
}
