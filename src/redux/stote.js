import { createStore, combineReducers } from 'redux';
import transactionsReducer from './transactions/transactionsReducer';

const rootReduser = combineReducers({
    transactions: transactionsReducer,
});

const store = createStore(
    rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
