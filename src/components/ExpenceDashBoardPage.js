import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenceDashBoardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenceDashBoardPage;
