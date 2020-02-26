import * as React from 'react';
import {AddTodo} from './add-todo'

interface AppRootState {
  title: string
}

export class AppRoot extends React.Component <{}, AppRootState>{

  constructor(props: any){
    super(props);
    this.state={
      title:'MyApp'
    }
  }

  clicked(){
      this.setState({title:this.state.title + 'A'})
  }

  render() {
    return <div>
      <h1 onClick={()=>this.clicked()}>App title: {this.state.title}</h1>
      <AddTodo></AddTodo>
      </div>
  }
}
