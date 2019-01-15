import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
const rootElement = document.getElementById('root');

store.subscribe(() => console.log('state', store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement
)