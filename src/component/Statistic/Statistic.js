import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
import CurrencyExchange from "../CurrencyExchange/CurrencyExchange";
import styles from "./statistic.module.css";
import Select from "react-select";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const colors = {
  lightorange: "#ecb22a",
  darkorange: "#e28b20",
  brown: "#d25925",
  lightblue: "#67b7d0",
  darkblue: "#5593d7",
  orange: "#ffab00",
  lightgreen: "#9cc254",
  green: "#73ad57",
  darkgreen: "#507c3a",
};
const selectOptMonth = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June	", label: "June	" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const selectOptYear = [{ value: 2000, label: 2000 }];

export default class Statistic extends Component {
  state = {
    baseData: [
      { label: "Основные расходы", y: "8700.00", color: colors.lightorange },
      { label: "Продукты", y: "3800.74", color: colors.darkorange },
      { label: "Машина", y: "1500.00", color: colors.brown },
      { label: "Забота о себе", y: "800.00", color: colors.lightblue },
      { label: "Забота о детях", y: "2208.50", color: colors.darkblue },
      { label: "Товары для дома", y: "300.00", color: colors.orange },
      { label: "Образование", y: "3400.00", color: colors.lightgreen },
      { label: "Досуг", y: "1230.00", color: colors.green },
      { label: "Другие расходы", y: "610.00", color: colors.darkgreen },
    ],
  };
  render() {
    const { baseData } = this.state;
    const options = {
      theme: "white",
      animationEnabled: true,
      exportEnabled: true,
      data: [
        {
          type: "pie",
          legendText: "{label}",
          toolTipContent: "{label}: <strong>{y}</strong>",
          indexLabel: "{label}",
          indexLabelPlacement: "inside",
          indexLabelFontColor: "White",
          dataPoints: baseData,
        },
      ],
    };

    return (
      <>
        {baseData.length>0? (
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
                      <li key={base.label} className={styles.list__item}>
                        <p className={styles.category_section}>
                          <span
                            style={{ backgroundColor: base.color }}
                            className={styles.label_before}></span>
                          <span className={styles.item__label}>
                            {base.label}
                          </span>
                        </p>
                        <p>{base.y}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={(styles.container, styles.costs_section)}>
                  <h3 className={styles.costs}>
                    <p className={styles.costs_title}>Расходы:</p>
                    <span className={styles.costs_total}>
                      22549.24 <span className={styles.costs_desc}>грн.</span>
                    </span>
                  </h3>
                  <h3 className={styles.costs}>
                    <p className={styles.costs_title}>Доходы:</p>
                    <span className={styles.income_total}>
                      22549.24 <span className={styles.costs_desc}>грн.</span>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        ): (
        <h2>
          У Вас нету данных для сведения статистики. Пожалуйста добавьте данные!
        </h2>
        )}
        <div className={styles.currencySection}>
          <CurrencyExchange />
        </div>
      </>
    );

    // return (
    //   <div className={styles.statistics}>
    //     <h2 className={styles.statistic_main_title}>Статистика</h2>
    //     <div className={styles.desctop_container}>
    //       <div className={styles.container}>
    //         <div className={styles.chart}>
    //           <CanvasJSChart options={options} />
    //         </div>
    //       </div>
    //       <div className={styles.main_section}>
    //         <div className={styles.select__section}>
    //           <Select
    //             className={styles.select__input}
    //             placeholder="Месяц"
    //             options={selectOptMonth}
    //           />
    //           <Select
    //             className={styles.select__input}
    //             placeholder="Год"
    //             options={selectOptYear}
    //           />
    //         </div>
    //         <div className={styles.statistic_container}>
    //           <div className={styles.statictic}>
    //             <div className={styles.statictic__title}>
    //               <p className={styles.statictic__category}>Категории</p>
    //               <p className={styles.statictic__total}>Сумма</p>
    //             </div>
    //             <ul className={styles.statistic__list}>
    //               {baseData.map((base) => (
    //                 <li key={base.label} className={styles.list__item}>
    //                   <p className={styles.category_section}>
    //                     <span
    //                       style={{ backgroundColor: base.color }}
    //                       className={styles.label_before}
    //                     ></span>
    //                     <span className={styles.item__label}>{base.label}</span>
    //                   </p>
    //                   <p>{base.y}</p>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //           <div className={(styles.container, styles.costs_section)}>
    //             <h3 className={styles.costs}>
    //               <p className={styles.costs_title}>Расходы:</p>
    //               <span className={styles.costs_total}>
    //                 22549.24 <span className={styles.costs_desc}>грн.</span>
    //               </span>
    //             </h3>
    //             <h3 className={styles.costs}>
    //               <p className={styles.costs_title}>Доходы:</p>
    //               <span className={styles.income_total}>
    //                 22549.24 <span className={styles.costs_desc}>грн.</span>
    //               </span>
    //             </h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}
