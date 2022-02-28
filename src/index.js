import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import {
	createStore,
	applyMiddleware,
	// compose // This is for build
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // debugging purposes
import thunk from 'redux-thunk'
import { reducers } from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
)
