import * as React from 'react'
import {Todo as ModelTodo} from '../model/index'

interface TodoProps{
    todo: ModelTodo
}
export class Todo extends React.Component<TodoProps>{
    constructor(props: TodoProps){
        super(props)
    }

    clicked(){
        console.log('todo clicked')
    }
    render(){
        var classes=['todo']
        var todo = this.props.todo

        if(todo.completed){
            classes.push('completed-todo')
        }

        if(todo.blinks){
            classes.push('blink')
        }

    return <p className={classes.join(' ')} onClick={()=>this.clicked()}>{todo.text}</p>
    }
}