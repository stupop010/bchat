import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import throttle from 'lodash.throttle';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import reducers from './store/reducers';
import { saveState, loadState } from './utils/localStorage';

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

library.add(faPlus, faUserPlus);

const persistedState = loadState();
const store = createStore(
  reducers,
  { auth: persistedState },
  composeEnhancers(applyMiddleware(ReduxThunk)),
);

store.subscribe(
  throttle(() => {
    saveState({
      token: store.getState().auth.token,
    });
  }, 1000),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('id'),
);
