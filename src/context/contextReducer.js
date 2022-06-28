const context__Reducer__Function = (state, action) => {
  let transactions;
  switch (action.type) {
    case "DELETE_TRANSACTIONS":
      transactions = state.filter((t) => t.id !== action.payload);
      return transactions;
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];
      return transactions;
    default:
      return state;
  }
};
export default context__Reducer__Function;
/*
category_income=[
  Business
  Salary
]
category_expense=[
  Bills
  Car
]
*add_income {Add} income for $SPEECHLY.NUMBER(amount) {dollars} in category $category_income(category) for $SPEECHLY.DATE(date)*/