import { createStore, combineReducers } from "redux";
import uuid, { stringify } from "uuid";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    createdAt,
    note,
    amount,
  },
});
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

const editExpense = (id, updates) => {
  type: "EDIT_EXPENSE", id, updates;
};

const setTextFilter = (text) => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

const sortByDate = () => ({
  type: "SORT_BY_Date",
});

const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_Date":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 100, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 500, createdAt: -2000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: "newspaper", amount: 10, createdAt: -2000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount }));

// store.dispatch(setTextFilter("Coffee"));
// store.dispatch(setTextFilter(""));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(124));

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(15));
// store.dispatch(setEndDate());
