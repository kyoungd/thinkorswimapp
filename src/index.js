import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import configureStore from './store';

// App Js
import App from './App';

// Style Css
import "./assets/css/style.css"
import "./assets/css/color.css"
import "./assets/css/responsive.css"

const store = configureStore();

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <App />
        </Provider>
    </React.Fragment>,
    document.getElementById('root')
);
