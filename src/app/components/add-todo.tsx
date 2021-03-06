import * as React from 'react';

interface AddTodoProps {
  addTodo: (todoText: string)=>void
}

interface AddTodoState {
  todoText: string
}

export class AddTodo extends React.Component<AddTodoProps, AddTodoState>{

  constructor(props) {
    super(props);
    this.state = {
      todoText: ''
    }
  }

  render() {
    return <form onSubmit={e => this.submit(e)} >
      <input type="text" placeholder="enter text" onChange={e => this.handleOnChange(e)} name="text" value={this.state.todoText} />
      <button type="submit">Add todo</button>
    </form>
  }

  submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('about to submit', this.state.todoText)
    this.props.addTodo(this.state.todoText)
    this.setState({
      todoText: ''
    })
  }

  handleOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      todoText: e.target.value
    })
  }
}
