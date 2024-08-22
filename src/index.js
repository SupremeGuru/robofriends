import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './containers/App.css'
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider, connect } from "react-redux"; // This is what connects redux and react together 
import { createStore } from "redux"; // This is the module to create a store with redux 
import { searchRobots } from './reducers';
import 'tachyons'

const store = createStore(searchRobots) // from documentation createStore() is legacy
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
