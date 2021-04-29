import React from "react";
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../actions/filters";
import { connect } from "react-redux";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

class ExpenseListFilters extends React.Component {
  state = {
    autoFocus: null,
  };
  onDateChange = (e) => {
    if (e) {
      let startDate = e[0];
      let endDate = e[1];
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
    } else {
      console.log(e);
      this.props.dispatch(setStartDate(null));
      this.props.dispatch(setEndDate(null));
    }
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount(e.target.value));
            } else if (e.target.value === "date") {
              this.props.dispatch(sortByDate(e.target.value));
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          name="DatePicker"
          onChange={this.onDateChange}
          value={[
            new Date(this.props.filters.startDate),
            new Date(this.props.filters.endDate),
          ]}
        />
      </div>
    );
  }
}

const mapStateToFilter = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToFilter)(ExpenseListFilters);
