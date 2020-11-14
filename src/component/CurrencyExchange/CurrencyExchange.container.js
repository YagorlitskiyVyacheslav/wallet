import { connect } from "react-redux"
import CurrencyExchange from "./CurrencyExchange"


const mapStateToProps = (state) => ({
    actualCurs: state.currency
})

export default connect(mapStateToProps)(CurrencyExchange);