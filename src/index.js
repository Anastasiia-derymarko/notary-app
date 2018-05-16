import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux';


const store = createStore(configureStore, {});

ReactDOM.render(
	<Provider store={store}>
    	<App />
	</Provider>,
document.getElementById('root'));
registerServiceWorker();
