import React, { Component } from "react";
import CurrencyExchange from "../CurrencyExchange";
import styles from "./Home.module.css";

export default class Home extends Component {
  // static propTypes = {
  //     contacts: PropTypes.arrayOf(PropTypes.object),
  //     filter: PropTypes.string,
  //     name: PropTypes.string,
  //     number: PropTypes.string,
  //   };

  //   static defaultProps = {
  //   financeData: [{
  //     date: 1553699509960,
  //     type: "+",
  //     category: "Job",
  //     amount: 2000,
  //     balanceAfter: 3000,
  //     comments: "get money by my Job",
  //     typeBalanceAfter: "-",
  //   }],
  //     filter: "",
  //     name: "Annie Copeland",
  //     number: "227-91-26",
  //   };

  state = {
    financeData: [
      {
        id: "5c9b88bbfddb83212234a926",
        date: 1553699509444,
        type: "+",
        category: "Job",
        amount: 2000,
        balanceAfter: 3000,
        comments: "get money by my Job",
        typeBalanceAfter: "-",
      },
      {
        id: "5c9b88bbfddb83212234a927",
        date: 199482466555,
        type: "-",
        category: "Other",
        amount: 5000,
        balanceAfter: 2000,
        comments: "get money by my Job",
        typeBalanceAfter: "+",
      },
      {
        id: "5c9b88bbfddb83212234a928",
        date: 1994824777,
        type: "+",
        category: "Car",
        amount: 1000,
        balanceAfter: 5000,
        comments: "buy to car Divan",
        typeBalanceAfter: "+",
      },
      {
        id: "5c9b88bbfddb83212234a929",
        date: 1994824888,
        type: "+",
        category: "Car",
        amount: 1000,
        balanceAfter: 5000,
        comments: "buy to car Divan",
        typeBalanceAfter: "+",
      },
      {
        id: "5c9b88bbfddb83212234a930",
        date: 1994824999,
        type: "-",
        category: "Car",
        amount: 1000,
        balanceAfter: 5000,
        comments: "buy to car Divan",
        typeBalanceAfter: "+",
      },
    ],
    id: "",
    date: 0,
    type: "",
    category: "",
    amount: 0,
    balanceAfter: 0,
    comments: "",
    typeBalanceAfter: "",
  };

  //   addContact = (data) => {
  //     let newContact = {
  //       id: uuidv4(),
  //       name: data.name,
  //       number: data.number,
  //     };

  //     const isNewContactUnique = () => {
  //       const { contacts } = this.state;
  //       return contacts.find((contact) => contact.name === newContact.name);
  //     };

  //     let newContactUnique = isNewContactUnique();

  //     this.setState((prevState) => {
  //       return !newContactUnique
  //         ? { contacts: [...prevState.contacts, newContact] }
  //         : window.alert(`${newContact.name} is already in contacts.`);
  //     });
  //   };

  render() {
    const { financeData } = this.state;

    console.log(financeData);
    console.log(document.documentElement.clientWidth);
    let date = new Date(199482466656).toLocaleDateString().split(".");
    console.log(date);

    return (
      <>
        <section className={styles.financeMobSection}>
          {document.documentElement.clientWidth < 767 &&
            (console.log("111111"),
            (
              <div className={styles.financeMobWrapper}>
                <ul className={styles.financeMobList}>
                  {financeData.map((data) => (
                    <>
                      <li key={data.id} className={styles.financeMobItem}>
                        <div className={styles.financeMobRow}>
                          <p className={styles.financeMobTitle}>Дата</p>
                          <span className={styles.financeMobDate}>
                            {/* {date = new Date(`${data.date}`).toLocaleDateString().split(".")} */}
                            {date = new Date(`${data.date}`).toDateString()}
                          </span>
                        </div>
                        <div className={styles.financeMobRow}>
                          <p className={styles.financeMobTitle}>Тип</p>
                          <span className={styles.financeMobDate}>
                            {data.type}
                          </span>
                        </div>
                        <div className={styles.financeMobRow}>
                          <p className={styles.financeMobTitle}>Категория</p>
                          <span className={styles.financeMobDate}>
                            {data.category}
                          </span>
                        </div>
                        <div className={styles.financeMobRow}>
                          <p className={styles.financeMobTitle}>Комментарии</p>
                          <span className={styles.financeMobDate}>
                            {data.comments}
                          </span>
                        </div>
                        <div className={styles.financeMobRow}>
                          <p className={styles.financeMobTitle}>Сумма</p>
                          <span
                            className={
                              data.type === "+"
                                ? styles.tdIncome
                                : styles.tdSpending
                            }>
                            {data.amount}
                          </span>
                        </div>
                        <div className={styles.financeMobRow}>
                          <div className={styles.financeMobTitle}>Баланс</div>
                          <span className={styles.financeMobDate}>
                            {data.balanceAfter}
                          </span>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            ))}

          {document.documentElement.clientWidth >= 768 &&
            (console.log("222222"),
            (
              <div className={styles.financeWrapper}>
                <table className={styles.financeTable}>
                  <thead className={styles.thead}>
                    <tr className={styles.tr}>
                      <th className={styles.th}>Дата</th>
                      <th className={styles.th}>Тип</th>
                      <th className={styles.th}>Категория</th>
                      <th className={styles.th}>Комментарии</th>
                      <th className={styles.th}>Сумма</th>
                      <th className={styles.th}>Баланс</th>
                    </tr>
                  </thead>

                  <tbody>
                    {financeData.map((data) => (
                      <tr key={data.id} className={styles.tr}>
                        <td className={styles.td}>{data.date}</td>
                        <td className={styles.td}>{data.type}</td>
                        <td className={styles.td}>{data.category}</td>
                        <td className={styles.td}>{data.comments}</td>
                        <td
                          className={
                            data.type === "+"
                              ? styles.tdIncome
                              : styles.tdSpending
                          }>
                          {data.amount}
                        </td>
                        <td className={styles.td}>{data.balanceAfter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
        </section>

        <div className={styles.currencySection}>
          <CurrencyExchange />
        </div>
      </>
    );
  }
}
