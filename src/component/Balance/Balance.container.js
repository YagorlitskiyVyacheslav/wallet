import { connect } from 'react-redux';
import Balance from "./Balance";

const mapDispatchToProps = (state) => ({
    balance: state.transactions.balance
})

export default connect(mapDispatchToProps)(Balance);
