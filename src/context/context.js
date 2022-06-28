import React, { createContext, useReducer } from "react";
import context__Reducer__Function from "./contextReducer";
const initialState = [];
export const expenseContextTracker = createContext();
export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(
    context__Reducer__Function,
    initialState
  );
  const deleteTransactions = (id) => {
    dispatch({ type: "DELETE_TRANSACTIONS", payload: id });
  };
  const addTransactions = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  };
  //console.log(transactions);
  return (
    <expenseContextTracker.Provider
      value={{ deleteTransactions, addTransactions, transactions }}
    >
      {children}
    </expenseContextTracker.Provider>
  );
};
