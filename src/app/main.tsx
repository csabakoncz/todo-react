import * as React from 'react';

// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';

import {AppRoot} from './components/app-root'


var el = document.getElementById("content");
ReactDOM.render( <AppRoot/>, el);