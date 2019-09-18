/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 14:48:11
 * @LastEditTime: 2019-09-10 10:02:23
 * @LastEditors: Please set LastEditors
 */

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = preloadedState => {
    return createStore (
        reducer,
        composeEnhancers()
    );
}

const store = configureStore();

export default store;