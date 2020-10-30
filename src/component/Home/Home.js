import React, { Component } from "react";
import CurrencyExchange from "../CurrencyExchange";
import "./Home.css";

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
        id: "5c9b88bbfddb83212234a928",
        date: 1994824888,
        type: "+",
        category: "Car",
        amount: 1000,
        balanceAfter: 5000,
        comments: "buy to car Divan",
        typeBalanceAfter: "+",
      },
      {
        id: "5c9b88bbfddb83212234a928",
        date: 1994824999,
        type: "+",
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

    return (
      <>
        <section className="finance-section">
          {document.documentElement.clientWidth < 767 &&
            (console.log("111111"),
            (
              <div className="finance-mob__wrapper">
                {/* <div className="finance-mob__block-title">
                  <p className="finance-mob__title">Дата</p>
                  <p className="finance-mob__title">Тип</p>
                  <p className="finance-mob__title">Категория</p>
                  <p className="finance-mob__title">Комментарии</p>
                  <p className="finance-mob__title">Сумма</p>
                  <div className="finance-mob__title">Баланс</div>
                </div> */}

                <ul className="finance-mob__list">
                  {financeData.map((data) => (
                    <>
                      <li key={data.id} className="finance-mob__item">
                        <div className="finance-mob__row">
                          <p className="finance-mob__title">Дата</p>
                          <span className="finance-mob__data">{data.date}</span>
                        </div>
                        <div className="finance-mob__row">
                          <p className="finance-mob__title">Тип</p>
                          <span className="finance-mob__data">{data.type}</span>
                        </div>
                        <div className="finance-mob__row">
                          <p className="finance-mob__title">Категория</p>
                          <span className="finance-mob__data">
                            {data.category}
                          </span>
                        </div>
                        <div className="finance-mob__row">
                          <p className="finance-mob__title">Комментарии</p>
                          <span className="finance-mob__data">
                            {data.comments}
                          </span>
                        </div>
                        <div className="finance-mob__row">
                          <p className="finance-mob__title">Сумма</p>
                          <span className="finance-mob__data finance-mob__data--amount">
                            {data.amount}
                          </span>
                        </div>
                        <div className="finance-mob__row">
                          <div className="finance-mob__title">Баланс</div>
                          <span className="finance-mob__data">
                            {data.balanceAfter}
                          </span>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            ))}

          {/* {document.documentElement.clientWidth < 1280 && */}
          {document.documentElement.clientWidth > 768 &&
            (console.log("222222"),
            (
              <div className="finance-wrapper">
                <table className="finance-table">
                  <thead className="thead">
                    <tr className="tr">
                      <th className="th">Дата</th>
                      <th className="th">Тип</th>
                      <th className="th">Категория</th>
                      <th className="th">Комментарии</th>
                      <th className="th">Сумма</th>
                      <th className="th">Баланс</th>
                    </tr>
                  </thead>

                  <tbody>
                    {financeData.map((data) => (
                      <tr key={data.id} className="tr">
                        <td className="td">{data.date}</td>
                        <td className="td">{data.type}</td>
                        <td className="td">{data.category}</td>
                        <td className="td">{data.comments}</td>
                        <td className="td td--amount">{data.amount}</td>
                        <td className="td">{data.balanceAfter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
        </section>

        <div className="currency-section">
          <CurrencyExchange />
        </div>
        {/* <ContactForm onAddContact={this.addContact} /> */}
      </>
    );
  }
}

// {id: "5c9b88bbfddb83212234a926", date: 1553699509960, type: "+", category: "Job", amount: 2000, …}
// amount: 2000
// balanceAfter: 3000
// category: "Job"
// comments: "get money by my Job"
// date: 1553699509960
// id: "5c9b88bbfddb83212234a926"
// type: "+"
// typeBalanceAfter: "-"
