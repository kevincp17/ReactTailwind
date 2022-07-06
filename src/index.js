import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
import { Provider } from 'react-redux';
import storeToolKit from './Toolkit/storeToolkit'

ReactDOM.render(
  <Provider store={storeToolKit}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
