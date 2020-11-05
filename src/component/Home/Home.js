import React, { Component } from "react";
import PropTypes from "prop-types";
import HomeTable from "./HomeTable";
import Welcome from "./Welcome";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import Modal from "../Modal/Modal";
import TransactionForm from "../TransactionForm/TransactionForm";
import Button from "../Button/Button";
import Toggler from "../Toggler";
import styles from "./Home.module.css";

export default class Home extends Component {
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
    financeData: [
      {
        id: "5c9b88bbfddb83212234a926",
        date: 1553699509444,
        type: "+",
        category: "Job",
        comments: "get money by my Job",
        amount: 2000,
        balanceAfter: 3000,
      },
      {
        id: "5c9b88bbfddb83212234a927",
        date: 199482466555,
        type: "-",
        category: "Other",
        comments: "get money by my Job",
        amount: 5000,
        balanceAfter: 2000,
      },
      {
        id: "5c9b88bbfddb83212234a928",
        date: 1994824777,
        type: "+",
        category: "Car",
        comments: "buy to car Divamon",
        amount: 1000,
        balanceAfter: 5000,
      },
      {
        id: "5c9b88bbfddb83212234a929",
        date: 15262626509444,
        type: "+",
        category: "Car",
        comments: "buy divan",
        amount: 1000,
        balanceAfter: 5000,
      },
      {
        id: "5c9b88bbfddb83212234a930",
        date: 159929509444,
        type: "-",
        category: "Car",
        comments: "buy to car Divan",
        amount: 1000,
        balanceAfter: 5000,
      },
    ],
    id: "",
    date: 0,
    type: "",
    category: "",
    comments: "",
    amount: 0,
    balanceAfter: 0,
  };

  render() {
    const { financeData } = this.state;

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
