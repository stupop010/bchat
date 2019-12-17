import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
// import throttle from 'lodash.throttle';
import reducers from './redux/reducers';
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
    accessToken: store.getState().auth.access_token,
    refreshToken: store.getState().auth.refresh_token,
  });
  // }, 1000);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('id'),
);
