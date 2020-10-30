const baseURL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

const fetchCurrentCourse = () => {
  return fetch(baseURL).then((res) => res.json());
  // .then((entries) => entries.results);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchCurrentCourse };
