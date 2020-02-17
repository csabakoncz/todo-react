import * as React from 'react';

// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';


var el = document.getElementById("content");
ReactDOM.render( <h2>Hello world</h2>, el);