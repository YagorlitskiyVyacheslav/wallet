import React, { Component } from "react";
import exchangeAPI from "../../services/exchangeAPI";
import styles from "./currencyExchange.module.css";

export default class CurrencyExchange extends Component {
  state = {
    actualCurs: [
      //   { ccy: "USD", base_ccy: "UAH", buy: "28.20000", sale: "28.60000" },
      //   { ccy: "EUR", base_ccy: "UAH", buy: "33.10000", sale: "33.70000" },
      //   { ccy: "RUR", base_ccy: "UAH", buy: "0.35700", sale: "0.39700" },
      // { ccy: "BTC", base_ccy: "USD", buy: "12464.2216", sale: "13776.2450" },
    ],
  };

  componentDidMount() {
    exchangeAPI
      .fetchCurrentCourse()
      .then((actualCurs) => this.setState({ actualCurs }));
  }

  render() {
    const { actualCurs } = this.state;
    return (
      <div className={styles.wrap}>
        <table className={styles.currencyTable}>
          <thead>
            <tr className={styles.currencyTable__head}>
              <td>Валюта</td>
              <td>Продажа</td>
              <td>Покупка</td>
            </tr>
          </thead>
          {actualCurs.length > 0 && (
            <tbody>
              {actualCurs.map((point) => (
                <tr key={point.ccy} className={styles.currencyTable__body}>
                  <td className={styles.currencyTable__body__item}>
                    {point.ccy}
                  </td>
                  <td className={styles.currencyTable__body__item}>
                    {point.sale.substring(0, 5)}
                  </td>
                  <td className={styles.currencyTable__body__item}>
                    {point.buy.substring(0, 5)}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
