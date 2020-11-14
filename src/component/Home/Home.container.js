import { connect } from 'react-redux';
import { transactionsListSelector } from "../../redux/transactions/transactionsSelectors";
import Home from "./Home";

const mapStateToProps = (state) => ({
    items: transactionsListSelector(state)
  });

export default connect(mapStateToProps)(Home);
