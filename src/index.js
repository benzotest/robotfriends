import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import 'tachyons';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import {searchRobots,requestRobots} from './reducers.js';


const rootReducer = combineReducers({searchRobots, requestRobots});
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </div>
  </React.StrictMode>
);

