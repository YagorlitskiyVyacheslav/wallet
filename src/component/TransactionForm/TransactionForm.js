import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../../redux/transactions/transactionsActions";
import styles from "./TransactionForm.module.css";

const TransactionType = {
  DEPOSIT: "deposit",
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

    const correctTypeOfDate = [year, month, day].join("-");

    this.setState({ date: correctTypeOfDate });
    window.addEventListener("keydown", this.onEscape);
    document.querySelector("body").classList.add(`${styles.onOpenModal}`);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscape);
    document.querySelector("body").classList.remove(`${styles.onOpenModal}`);
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
    const { comment, value, category, count, date } = this.state;

    const { userId, token } = this.props;

    const transaction = {
      date: Date.parse(date),
      type: value,
      category,
      amount: count,
      comments: comment,
      userId,
      token,
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
    const { comment, transactionType, category, count, date } = this.state;

    const isSelectDepositInput = transactionType === TransactionType.DEPOSIT;

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
              checked={isSelectDepositInput}
              value={TransactionType.DEPOSIT}
              onChange={this.handlerRadio}
            />
            <span>Income</span>
            <span
              className={
                isSelectDepositInput
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
              checked={!isSelectDepositInput}
              onChange={this.handlerRadio}
            />
            <span>Cost</span>
            <span
              className={
                !isSelectDepositInput
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

          {isSelectDepositInput ? (
            <>
              <option value="Salary" label="Salary" />
              <option value="Part time job" label="Part time job" />
            </>
          ) : (
            <>
              <option value="Main Expenses" label="Main Expenses" />
              <option value="Food" label="Food" />
              <option value="Car" label="Car" />
              <option value="Self Care" label="Self Care" />
              <option value="Child Care" label="Child Care" />
              <option value="House" label="House" />
              <option value="Education" label="Education" />
              <option value="Entertainment" label="Entertainment" />
              <option value="Health" label="Health" />
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
            Add
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.items,
  userId: state.auth.user.id,
  token: state.auth.token,
});

const mapDispatchToProps = {
  addTransaction,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
