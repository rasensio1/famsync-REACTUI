import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {API_BASE, ITEMS_PATH} from './settings'

const startApp = (defaultStore) => {
    let store = createStore(todoApp, defaultStore)
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
}

window.fetch(API_BASE + ITEMS_PATH).then(
    function(response) {
      //I don't really get why the response and data are managed
      //in separate functions
      response.json().then(function(data) {
        let defaultStore = {todos: data} 
        startApp(defaultStore)
  })
})

