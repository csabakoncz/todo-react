import * as React from 'react';

// react-dom is used to make the bridge between React and the browser DOM
import * as ReactDOM from 'react-dom';

import {AppRoot} from './components/app-root'
import {AppStoreService} from './services/app-store'

const appStoreService = new AppStoreService()

const props = {
    stateStore: appStoreService.store
}

ReactDOM.render( React.createElement(AppRoot, props, null), document.getElementById("content"))