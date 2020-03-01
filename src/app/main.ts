import * as React from 'react';

// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';

import {AppRoot} from './components/app-root'
import {INITIAL_STATE} from './services/initial-state'


var el = document.getElementById("content");
const state = INITIAL_STATE;
const props = {
    appState: state,
    click: ()=>{
        state.title += 'A'
        render()
    }
}
function render(){
    ReactDOM.render( React.createElement(AppRoot,props, null), el);
}
render()