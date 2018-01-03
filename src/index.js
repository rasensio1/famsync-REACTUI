import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'


var server_todos = []
window.fetch("http://0.0.0.0:3000/items").then(function(response) {
	response.json().then(function(data) {
//Set dummyDefaultStore with data
		});
})

debugger;
let dummyDefaultStore = {todos: server_todos}

let store = createStore(todoApp, dummyDefaultStore)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
