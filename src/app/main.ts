import * as React from 'react';

// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';

import {AppRoot} from './components/app-root'
import {INITIAL_STATE} from './services/initial-state'
import { AppState } from './model';


const state = INITIAL_STATE;

var appRootComp: AppRoot;

const props = {
    appState: state,
    setAppRoot: (arc: AppRoot)=>{
        appRootComp = arc
    },
    click: (state)=>{
        appRootComp.setState({
            ...state,
            title: state.title + 'A'
        })
    },
    addTodo: (state, todoText)=>{
        appRootComp.setState({
            ...state,
            todos: [{text:todoText, id: Math.random()}].concat(state.todos)
        })
    },
    toggleTodo: (state: AppState, todoId)=>{
        appRootComp.setState({
            ...state,
            todos: state.todos.map(todo=>(todoId==todo.id?{...todo, completed: !todo.completed}:todo))
        })
    }
}

ReactDOM.render( React.createElement(AppRoot,props, null), document.getElementById("content"))