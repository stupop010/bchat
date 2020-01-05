import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import throttle from 'lodash.throttle';
import reducers from './store/reducers';
import { saveState } from './utils/localStorage';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

library.add(faPlus);

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

store.subscribe(() => {
  // throttle(() => {
  saveState({
    token: store.getState().auth.token,
    refreshToken: store.getState().auth.refreshToken,
  });
  // }, 1000);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('id'),
);
