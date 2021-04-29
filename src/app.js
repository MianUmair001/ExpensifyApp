import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRoute";
import { Provider } from "react-redux";

//Redux Store Configuration
import configureStore from "./store/configureStore";
//Expenses Actions
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
//Filter Actions
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filters";
// Selctors
import getVisibleExpenses from "./selectors/expenses";
//Configure Store
const store = configureStore();

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
