import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import transactionsReducer from './transactions/transactionsReducer';
import authReducer from './auth/authReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
    transactions: transactionsReducer,
    auth: authReducer,
});

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    )
);

export default store;
