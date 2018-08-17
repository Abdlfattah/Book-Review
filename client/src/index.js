import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from  'react-redux'
import { applyMiddleware, createStore } from 'redux'
import ReduxThunk from 'redux-thunk' 
import PromiseMiddleware from  'redux-promise'
import Routes from './routes'



// import Reducers
import reducers from "./reducers"
const createStoreWithMiddleware = applyMiddleware(PromiseMiddleware,ReduxThunk)(createStore)
ReactDOM.render(
    <Provider store ={createStoreWithMiddleware(reducers)}>
        <BrowserRouter >
            <Routes/>
        </BrowserRouter>
    </Provider>

   ,document.getElementById('root'));

