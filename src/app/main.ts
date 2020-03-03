import * as React from 'react';

// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';

import {AppRoot} from './components/app-root'
import {INITIAL_STATE} from './services/initial-state'


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
    }
}

ReactDOM.render( React.createElement(AppRoot,props, null), document.getElementById("content"))