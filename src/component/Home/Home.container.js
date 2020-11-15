import { connect } from 'react-redux';
import { reverseTransactionListSelector } from "../../redux/transactions/transactionsSelectors";
import Home from "./Home";

const mapStateToProps = (state) => ({
    items: reverseTransactionListSelector(state)
  });

export default connect(mapStateToProps)(Home);
