import cart from './cart.js';
import asyncActionReducer from "../api/asyncActions";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cart,
    asyncActionReducer
});

export default rootReducer;