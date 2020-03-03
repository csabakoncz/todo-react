import * as React from 'react';
import {AddTodo} from './add-todo'
import {Todo} from './todo'
import { AppState } from '../model';

interface AppProps {
   appState: AppState,
   setAppRoot: (arc: React.Component)=>void,
   click: (appState: AppState, component: React.Component)=>void
}

export class AppRoot extends React.Component <AppProps, AppState>{

  constructor(props: AppProps){
    super(props);
    this.state = props.appState
    props.setAppRoot(this)
  }

  clicked(){
      this.props.click(this.state, this)
  }

  render() {
    return <div>
      <h1 onClick={()=>this.clicked()}>App title: {this.state.title}</h1>
      <AddTodo></AddTodo>
      {this.state.todos.map(todo=><Todo todo={todo}></Todo>)}
      </div>
  }
}
