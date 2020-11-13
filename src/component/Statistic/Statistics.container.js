import { connect } from "react-redux";
import {
  UIStatisticsTransactionsListSelector,
  totalIncomeBalanceSelector,
  totalCostBalanceSelector,
} from "../../redux/transactions/transactionsSelectors";
import Statistic from "./Statistic";

const mapStateToProps = (state) => ({
  dataPoints: UIStatisticsTransactionsListSelector(state),
  totalIncomeBalance: totalIncomeBalanceSelector(state),
  totalCostBalance: totalCostBalanceSelector(state),
});

export default connect(mapStateToProps)(Statistic);
