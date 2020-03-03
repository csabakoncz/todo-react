import * as React from 'react';
import {AddTodo} from './add-todo'
import {Todo} from './todo'
import { AppState, Todo as ModelTodo } from '../model';
import { Store } from 'redux';
import { Actions } from '../actions/index';

interface AppProps {
   stateStore: Store<AppState>
}

export class AppRoot extends React.Component <AppProps, AppState>{

  constructor(props: AppProps){
    super(props);
    const store = props.stateStore;
    this.state = store.getState()
    store.subscribe(()=>{
      this.setState(store.getState())
    })
  }

  clicked(){
      this.props.stateStore.dispatch(Actions.titleClick())
    }

    addTodo(todoText: string){
      this.props.stateStore.dispatch(Actions.addTodo(todoText))
  }

  toggleTodo(todo: ModelTodo){
      this.props.stateStore.dispatch(Actions.toggleTodoAnimated(todo))
  }

  render() {
    return <div>
      <h1 onClick={()=>this.clicked()}>App title: {this.state.title}</h1>
      <AddTodo addTodo={(text)=>this.addTodo(text)}></AddTodo>
      {this.state.todos.map(todo=><Todo todo={todo} key={todo.id} toggle={(todoId)=>this.toggleTodo(todo)}></Todo>)}
      </div>
  }
}
