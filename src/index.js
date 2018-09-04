import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import './theme/globalStyle';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';

export const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
