import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import transactionsActions from "../../redux/transactions/transactionsActions";
import styles from "./TransactionForm.module.css";

const TransactionType = {
  DEPOSIT: "deposite",
  WITHDRAW: "withdraw",
};

class TransactionForm extends Component {
  state = {
    comment: "",
    value: "-",
    transactionType: TransactionType.WITHDRAW,
    category: "",
    count: "",
    date: "",
  };

  componentDidMount() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = String(currentDate.getDate()).padStart(2, "0");

    const corectTypeOfDate = [year, month, day].join("-");

    this.setState({ isOpenModal: true, date: corectTypeOfDate });
    window.addEventListener("keydown", this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscape);
  }

  handlerInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerRadio = (e) => {
    this.setState({
      transactionType: e.target.value,
      value: e.target.value === TransactionType.DEPOSIT ? "+" : "-",
      category: "",
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const {
      comment,
      value,
      transactionType,
      category,
      count,
      date,
    } = this.state;

    const newCount = Number(value + count);

    const transaction = {
      id: uuid(),
      comment,
      value,
      count: newCount,
      transactionType,
      category,
      date,
    };

    this.props.addTransaction(transaction);
    this.props.onToggle();
  };

  onBtnClose = () => this.props.onToggle();

  onEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onToggle();
    }
  };

  render() {
    const {
      comment,
      transactionType,
      category,
      count,
      date,
      isOpenModal,
    } = this.state;

    const isSelectDepositeInput = transactionType === TransactionType.DEPOSIT;

    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <div className={styles.formHeader}>
          <h3 className={styles.title}>Add a transaction</h3>
          <button
            className={styles.buttonCloseModal}
            type="button"
            onClick={this.onBtnClose}
          />
        </div>
        <div className={styles.radioGroup} role="group">
          <label className={styles.label}>
            <input
              className={styles.depositeInput}
              type="radio"
              checked={isSelectDepositeInput}
              value={TransactionType.DEPOSIT}
              onChange={this.handlerRadio}
            />
            <span>Income</span>
            <span
              className={
                isSelectDepositeInput
                  ? `${styles.radioIconDeposite} ${styles.active}`
                  : `${styles.radioIconDeposite}`
              }
            />
          </label>
          <label className={styles.label}>
            <input
              className={styles.withdrawInput}
              type="radio"
              value={TransactionType.WITHDRAW}
              checked={!isSelectDepositeInput}
              onChange={this.handlerRadio}
            />
            <span>Cost</span>
            <span
              className={
                !isSelectDepositeInput
                  ? `${styles.radioIconWithdraw} ${styles.active}`
                  : `${styles.radioIconDeposite}`
              }
            />
          </label>
        </div>
        <select
          className={styles.select}
          name="category"
          value={category}
          onChange={this.handlerInput}
        >
          <option value="" label="Category" disabled />

          {isSelectDepositeInput ? (
            <>
              <option value="salary" label="Salary" />
              <option value="partTimeJob" label="Part time job" />
            </>
          ) : (
            <>
              <option value="car" label="Car" />
              <option value="food" label="Food" />
              <option value="health" label="Health" />
            </>
          )}
        </select>
        <div className={styles.inputGroup}>
          <input
            className={styles.inputCount}
            type="number"
            value={count}
            name="count"
            placeholder="0.00"
            onChange={this.handlerInput}
          />
          <input
            className={styles.inputDate}
            type="date"
            name="date"
            value={date}
            onChange={this.handlerInput}
          />
        </div>
        <label className={styles.textAreaLabel}>
          Comment
          <textarea
            className={styles.textArea}
            type="text"
            onChange={this.handlerInput}
            name="comment"
            value={comment}
            placeholder="Add a comment..."
          />
        </label>
        <div className={styles.formFooter}>
          <button
            className={styles.buttonAddTransaction}
            type="submit"
            disabled={!count}
          >
            Добавить
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ transactions: state.transactions.items });

const mapDispatchToProps = {
  addTransaction: transactionsActions.addTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);