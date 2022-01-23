import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import * as serviceWorker from './serviceWorker';
// import Reducer from './Reducer';
// import { createStore } from 'redux';
import { store } from './app/store';
import { Provider } from 'react-redux';

// const store = createStore(Reducer);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
