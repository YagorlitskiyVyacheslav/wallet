import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import Select from 'react-select';
import selectOptMonth from './selectOptMonth';
import styles from './statistic.module.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const countOfYears = [1, 2, 3, 4, 5];
const selectOptYear = [];

class Statistic extends Component {
  state = {
    mounth: '',
    year: '',
  };

  componentDidMount() {
    const currentDate = new Date();
    let initialYear = currentDate.getFullYear();
    const initialMounth = currentDate.getMonth() + 1;
    const initialDay = '01';

    const currentFormatStartDate = [
      initialYear,
      initialMounth,
      initialDay,
    ].join('-');

    const currentFormatEndDate = Date.now();

    const parsedStartDate = Date.parse(currentFormatStartDate);
    this.props.setFilter({ start: parsedStartDate, end: currentFormatEndDate });

    const initialMounthOpton = {
      value: initialMounth,
      label: selectOptMonth.find(item => Number(item.value) === initialMounth)
        .label,
    };
    const initialYearOpton = { value: initialYear, label: initialYear };

    this.setState({ mounth: initialMounthOpton, year: initialYearOpton });

    countOfYears.forEach(e => {
      if (selectOptYear.length < 1) {
        selectOptYear.push({
          value: initialYear,
          label: initialYear,
        });
        return;
      }

      initialYear -= 1;
      selectOptYear.push({
        value: initialYear,
        label: initialYear,
      });
    });
  }

  filterGenerator = (year, mounth) => {
    const startDate = new Date(year, mounth - 1, '01');
    const endDate = new Date(year, mounth, 0, 23, 59, 59);

    this.props.setFilter({
      start: Date.parse(startDate),
      end: Date.parse(endDate),
    });
  };

  handlerMounthInput = e => {
    const { year } = this.state;
    const { value, label } = e;
    this.setState({ mounth: { value, label } });
    this.filterGenerator(year.value, value);
  };

  handlerYearInput = e => {
    const { mounth } = this.state;
    const { value, label } = e;
    this.setState({ year: { value, label } });
    this.filterGenerator(value, mounth.value);
  };

  render() {
    const { mounth, year } = this.state;
    const dataPoints = this.props.dataPoints;
    const totalIncomeBalance = this.props.totalIncomeBalance;
    const totalCostBalance = this.props.totalCostBalance;

    const options = {
      theme: 'white',
      animationEnabled: true,
      exportEnabled: true,
      data: [
        {
          type: 'pie',
          legendText: '{category}',
          toolTipContent: '{category}: <strong>{amount}</strong>',
          indexLabel: '{category}',
          indexLabelPlacement: 'inside',
          indexLabelFontColor: 'White',
          dataPoints: dataPoints,
        },
      ],
    };

    return dataPoints.length > 0 || totalIncomeBalance > 0 ? (
      <div className={styles.statistics}>
        <h2 className={styles.statistic_main_title}>Statistics</h2>
        <div className={styles.desctop_container}>
          <div className={styles.container}>
            <div className={styles.chart}>
              {dataPoints.length > 0 ? <CanvasJSChart options={options} /> : <p className={styles.chart_error}>There is no any information about costs!
              Please add some costs!</p>}
            </div>
          </div>
          <div className={styles.main_section}>
            <div className={styles.select__section}>
              <Select
                options={selectOptMonth}
                value={mounth}
                className={styles.select__input}
                onChange={this.handlerMounthInput}
                placeholder="Месяц"
              />
              <Select
                value={year}
                className={styles.select__input}
                onChange={this.handlerYearInput}
                placeholder="Год"
                options={selectOptYear}
              />
            </div>
            <div className={styles.statistic_container}>
              <div className={styles.statistic}>
                <div className={styles.statistic__title}>
                  <p className={styles.statistic__category}>Category</p>
                  <p className={styles.statistic__total}>Total</p>
                </div>
                <ul className={totalCostBalance > 0 ? styles.statistic__list: styles.statistic__list_error}>
                  {dataPoints.map((base) => (
                    <li key={base.category} className={styles.list__item}>
                      <p className={styles.category_section}>
                        <span
                          style={{ backgroundColor: base.color }}
                          className={styles.label_before}
                        />
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
                  <p className={styles.costs_title}>Incomes:</p>
                  <span className={styles.costs_total}>
                    {totalCostBalance}{" "}
                    <span className={styles.costs_desc}>UAH</span>
                  </span>
                </h3>
                <h3 className={styles.costs}>
                  <p className={styles.costs_title}>Costs:</p>
                  <span className={styles.income_total}>
                    {totalIncomeBalance}{" "}
                    <span className={styles.costs_desc}>UAH</span>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={styles.statistics}>
        <h2 className={styles.statistic_main_title}>Статистика</h2>
        <div className={styles.desctop_container}>
          <div className={styles.main_section}>
            <div className={styles.select__section}>
              <Select
                options={selectOptMonth}
                value={mounth}
                className={styles.select__input}
                onChange={this.handlerMounthInput}
                placeholder="Месяц"
              />
              <Select
                value={year}
                className={styles.select__input}
                onChange={this.handlerYearInput}
                placeholder="Год"
                options={selectOptYear}
              />
            </div>
            <h2 className={styles.error__title}>
              У Вас нету данных для сведения статистики. Пожалуйста добавьте
              данные!
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistic;
