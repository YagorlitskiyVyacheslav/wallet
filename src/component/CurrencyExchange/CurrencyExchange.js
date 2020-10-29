import React, { Component } from "react";
import exchangeAPI from "../../services/exchangeAPI";
import "./currencyExchange.css";

export default class CurrencyExchange extends Component {
  state = {
    actualCurs: [
      //   { ccy: "USD", base_ccy: "UAH", buy: "28.20000", sale: "28.60000" },
      //   { ccy: "EUR", base_ccy: "UAH", buy: "33.10000", sale: "33.70000" },
      //   { ccy: "RUR", base_ccy: "UAH", buy: "0.35700", sale: "0.39700" },
      //   { ccy: "BTC", base_ccy: "USD", buy: "12464.2216", sale: "13776.2450" },
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
      <div className="wrap">
        <table className="currencyTable">
          <thead>
            <tr className="currencyTable__head">
              <td>Валюта</td>
              <td>Продажа</td>
              <td>Покупка</td>
            </tr>
          </thead>
          {actualCurs.length > 0 && (
            <tbody>
              {actualCurs.map((point) => (
                <tr key={point.ccy} className="currencyTable__body">
                  <td className="currencyTable__body--item">{point.ccy}</td>
                  <td className="currencyTable__body--item">{point.sale}</td>
                  <td className="currencyTable__body--item">{point.buy}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
