import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateState } from "../../redux/transactions/transactionsActions";
import transactionOperations from "../../redux/transactions/transactionOperations";
import HomeTable from "./HomeTable/HomeTable";
import Welcome from "./Welcome/Welcome";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import Modal from "../Modal/Modal";
import TransactionForm from "../TransactionForm/TransactionForm";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import Toggler from "../Toggler";
import styles from "./Home.module.css";

const Home = ({ items }) => (
  <>
    <Toggler>
      {({ isOpen, onToggle }) => (
        <>
          {isOpen ? (
            <Modal onToggle={onToggle}>
              <TransactionForm onToggle={onToggle} />
            </Modal>
          ) : (
            <OpenModalButton onToggle={onToggle} />
          )}
        </>
      )}
    </Toggler>

    <section className={styles.financeMobSection}>
      {items.length === 0 && <Welcome />}
      {items.length !== 0 && <HomeTable finance={items} />}
    </section>

    <div className={styles.currencySection}>
      <CurrencyExchange />
    </div>
  </>
);

Home.propTypes = {
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


// TODO: to container
const mapStateToProps = (state) => ({
  items: state.transactions.items,
});

export default connect(mapStateToProps)(Home);
