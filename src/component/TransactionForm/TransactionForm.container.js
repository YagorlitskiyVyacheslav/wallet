import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { createTransaction } from '../../redux/transactions/transactionOperations';
import {
    userIdSelector,
    userTokenSelector,
} from '../../redux/auth/authSelectors';
import {
    transactionsListSelector,
    totalBalanceSelector,
} from '../../redux/transactions/transactionsSelectors';

const mapStateToProps = state => ({
    transactions: transactionsListSelector(state),
    balance: totalBalanceSelector(state),
    userId: userIdSelector(state),
    token: userTokenSelector(state),
});

const mapDispatchToProps = {
    createTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
