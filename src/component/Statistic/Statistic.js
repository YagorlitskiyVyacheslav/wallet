import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import Select from "react-select";
import { connect } from "react-redux";
import colorSwitcher from "./colorsSwitcher";
import selectOptMonth from "./selectOptMonth";
import styles from "./statistic.module.css";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const selectOptYear = [{ value: 2000, label: 2000 }];

class Statistic extends Component {
  totalIncome = () => {
    const dataBase = this.props.data;
    let sum = 0;
    const filteredData = dataBase.filter(el => el.type === '+');
    filteredData.map(el =>sum += +el.amount )
    return sum;
  };

  totalCosts = () => {
    const dataBase = this.props.data;
    let sum = 0;
    const filteredData = dataBase.filter(el => el.type === '-');
    filteredData.map(el =>sum += +el.amount )
    return sum;
  };

  addColors = () => {
    const dataBase = this.props.data;
    let data = [];
    dataBase.forEach((el) => {
      if (el.type === "-") {
        data.push(el);
        el.color = colorSwitcher(el.category);
        el.y = el.amount;
        el.label = el.category;
      }
    });
    return data;
  };

  render() {
    const baseData = this.addColors();

    const options = {
      theme: "white",
      animationEnabled: true,
      exportEnabled: true,
      data: [
        {
          type: "pie",
          legendText: "{category}",
          toolTipContent: "{category}: <strong>{amount}</strong>",
          indexLabel: "{category}",
          indexLabelPlacement: "inside",
          indexLabelFontColor: "White",
          dataPoints: baseData,
        },
      ],
    };
    return baseData.length > 0 ? (
      <div className={styles.statistics}>
        <h2 className={styles.statistic_main_title}>Статистика</h2>
        <div className={styles.desctop_container}>
          <div className={styles.container}>
            <div className={styles.chart}>
              <CanvasJSChart options={options} />
            </div>
          </div>
          <div className={styles.main_section}>
            <div className={styles.select__section}>
              <Select
                className={styles.select__input}
                placeholder="Месяц"
                options={selectOptMonth}
              />
              <Select
                className={styles.select__input}
                placeholder="Год"
                options={selectOptYear}
              />
            </div>
            <div className={styles.statistic_container}>
              <div className={styles.statictic}>
                <div className={styles.statictic__title}>
                  <p className={styles.statictic__category}>Категории</p>
                  <p className={styles.statictic__total}>Сумма</p>
                </div>
                <ul className={styles.statistic__list}>
                  {baseData.map((base) => (
                    <li key={base._id} className={styles.list__item}>
                      <p className={styles.category_section}>
                        <span
                          style={{ backgroundColor: base.color }}
                          className={styles.label_before}
                        ></span>
                        <span className={styles.item__label}>
                          {base.category}
                        </span>
                      </p>
                      <p>{base.amount}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={(styles.container, styles.costs_section)}>
                <h3 className={styles.costs}>
                  <p className={styles.costs_title}>Расходы:</p>
                  <span className={styles.costs_total}>
                    {this.totalCosts()}{" "}
                    <span className={styles.costs_desc}>грн.</span>
                  </span>
                </h3>
                <h3 className={styles.costs}>
                  <p className={styles.costs_title}>Доходы:</p>
                  <span className={styles.income_total}>
                    {this.totalIncome()}{" "}
                    <span className={styles.costs_desc}>грн.</span>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <h2 className={styles.error__title}>
        У Вас нету данных для сведения статистики. Пожалуйста добавьте данные!
      </h2>
    );
  }
}

const mapDispatchToProps = (state) => ({
  data: state.transactions.items,
});
export default connect(mapDispatchToProps)(Statistic);
