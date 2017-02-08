import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

import { createStore } from 'redux'
import cocktailsReducer from './reducers/cocktails_reducer'
import { addCocktail } from './actions/index'
import { defaultCocktails } from './actions/index'

import { Provider } from 'react-redux'

const store = createStore(cocktailsReducer)

ReactDOM.render(
  <Provider store = { store }
    <App />
  </Provider>,
  document.getElementById('container')
)
