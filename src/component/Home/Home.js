import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateState } from "../../redux/transactions/transactionsActions";
import transactionOperations from "../../redux/transactions/transactionOperations";
import HomeTable from "./HomeTable/HomeTable";
import Welcome from "./Welcome/Welcome";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import Modal from "../Modal/Modal";
import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../Button/Button";
import Toggler from "../Toggler";
import styles from "./Home.module.css";

class Home extends Component {
  static propTypes = {
    financeData: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        comments: PropTypes.string,
        amount: PropTypes.number.isRequired,
        balanceAfter: PropTypes.number.isRequired,
      }).isRequired
      // ).isRequired,
    ),
  };

  state = {
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    const {updateState, user, token} = this.props;

    transactionOperations
      .getTransactions(user, token)
      .then((transactions) => {
        const balance = Number(
          transactions.typeTotalBalance + transactions.totalBalance
        );
        const items = transactions.data;
        updateState(items, balance);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const financeData = this.props.items;

    return (
      <>
        <Toggler>
          {({ isOpen, onToggle }) => (
            <>
              {isOpen ? (
                <Modal onToggle={onToggle}>
                  <TransactionForm onToggle={onToggle} />
                </Modal>
              ) : (
                <Button onToggle={onToggle} />
              )}
            </>
          )}
        </Toggler>

        <section className={styles.financeMobSection}>
          {financeData.length === 0 && <Welcome />}
          {financeData.length !== 0 && <HomeTable finance={financeData} />}
        </section>

        {document.documentElement.clientWidth < 1280 && (
          <div className={styles.currencySection}>
            <CurrencyExchange />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.transactions.items,
  balance: state.transactions.balance,
  user: state.auth.user,
  token: state.auth.token
});

const mapToDispatch = {
  updateState,
};

export default connect(mapStateToProps, mapToDispatch)(Home);
