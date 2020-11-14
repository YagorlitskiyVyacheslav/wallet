import { CURRENCY_API_URL } from "../../constants"
import { getCurrencyExchange } from "./currencyAction";

export const currencyExchengeOperation = () => async (dispath) => {
try {
    const responce = await fetch(CURRENCY_API_URL);
    const currency = await responce.json();
    dispath(getCurrencyExchange(currency))
} catch (error) {
    console.log(error)
}
}