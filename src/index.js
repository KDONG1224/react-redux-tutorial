import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux, store 생성
import { createStore } from "redux";
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer
import rootReducer from "./modules";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
