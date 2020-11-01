// import { combineReducers } from 'redux';
// import transactionsActions from './transactionsActions';
import transactionsActionTypes from './transactionsActionTypes';

const transactionsReducer = (
    state = {
        items: [],
        balance: 0,
    },
    action,
) => {
    switch (action.type) {
        case transactionsActionTypes.ADD:
            const newTransaction = {
                ...action.payload.transaction,
                balance: state.balance + action.payload.transaction.count,
            };
            return {
                items: [newTransaction, ...state.items],
                balance: state.balance + action.payload.transaction.count,
            };

        default:
            return state;
    }
};

// const transactionsReducer = (state = [], action) => {
//     switch (action.type) {
//         case transactionsActionTypes.ADD:
//             return [action.payload.transaction, ...state];

//         default:
//             return state;
//     }
// };

// const balanceReduser = (state = 0, action) => {
//     switch (action.type) {
//         case transactionsActionTypes.BALANCE:
//             return state + action.payload.count;

//         default:
//             return state;
//     }
// };

// export default combineReducers({
//     items: transactionsReducer,
//     balance: balanceReduser,
// });

export default transactionsReducer;
