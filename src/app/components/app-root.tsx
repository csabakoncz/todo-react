import * as React from 'react';
import {AddTodo} from './add-todo'
import {Todo} from './todo'
import { AppState } from '../model';

interface AppProps {
   appState: AppState,
   setAppRoot: (arc: React.Component)=>void,
   click: (appState: AppState)=>void,
   addTodo: (appState: AppState, todoText: string)=>void
}

export class AppRoot extends React.Component <AppProps, AppState>{

  constructor(props: AppProps){
    super(props);
    this.state = props.appState
    props.setAppRoot(this)
  }

  clicked(){
      this.props.click(this.state)
  }

  addTodo(todoText: string){
      this.props.addTodo(this.state, todoText)
  }

  render() {
    return <div>
      <h1 onClick={()=>this.clicked()}>App title: {this.state.title}</h1>
      <AddTodo addTodo={(text)=>this.addTodo(text)}></AddTodo>
      {this.state.todos.map(todo=><Todo todo={todo}></Todo>)}
      </div>
  }
}
