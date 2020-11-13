import React, { Component } from "react";
import exchangeAPI from "../../services/exchangeAPI";
import styles from "./currencyExchange.module.css";

export default class CurrencyExchange extends Component {
  state = {
    actualCurs: [],
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
