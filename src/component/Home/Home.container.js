import { connect } from 'react-redux';
import Home from "./Home";

const mapStateToProps = (state) => ({
    items: state.transactions.items,
  });

export default connect(mapStateToProps)(Home);