import * as React from 'react';
import {AddTodo} from './add-todo'
import {Todo} from './todo'
import { AppState } from '../model';

interface AppProps {
   appState: AppState,
   click: ()=>void
}

export class AppRoot extends React.Component <AppProps, {}>{

  constructor(props: AppProps){
    super(props);
  }

  clicked(){
      this.props.click()
  }

  render() {
    return <div>
      <h1 onClick={()=>this.clicked()}>App title: {this.props.appState.title}</h1>
      <AddTodo></AddTodo>
      {this.props.appState.todos.map(todo=><Todo todo={todo}></Todo>)}
      </div>
  }
}
