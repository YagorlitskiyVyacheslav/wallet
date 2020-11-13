import { connect } from 'react-redux';
import { totalBalanceSelector } from "../../redux/transactions/transactionsSelectors";
import Balance from "./Balance";

const mapDispatchToProps = (state) => ({
    balance: totalBalanceSelector(state)
})

export default connect(mapDispatchToProps)(Balance);
