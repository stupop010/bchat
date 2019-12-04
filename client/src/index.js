import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import { loadState, saveState } from './utils/localStorage';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

store.subscribe(() => {
  saveState({
    accessToken: store.getState().auth.access_token,
    refreshToken: store.getState().auth.refresh_token,
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('id'),
);
