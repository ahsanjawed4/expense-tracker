import React, { useContext } from "react";
import {
  Slide,
  List as MUList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  IconButton,
} from "@material-ui/core";
import { expenseContextTracker } from "../../../context/context";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./style";
const List = () => {
  const { deleteTransactions, transactions } = useContext(
    expenseContextTracker
  );
  //console.log(deleteTransactions, addTransactions);
  const classes = useStyles();
  /*
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: new Date().toLocaleTimeString(),
    },
    {
      id: 4,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: new Date().toLocaleTimeString(),
    },
    {
      id: 5,
      type: "Expense",
      category: "Pets",
      amount: 50,
      date: new Date().toLocaleTimeString(),
    },
  ];*/
  return (
    <>
      <MUList className={classes.list}>
        {transactions.map((a) => {
          return (
            <Slide direction="down" in mountOnEnter unmountOnExit key={a.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={
                      a.type === "Income"
                        ? classes.avatarIncome
                        : classes.avatarExpense
                    }
                  >
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={a.category}
                  secondary={`$${a.amount} - ${a.date}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteTransactions(a.id)}
                    edge="end"
                  >
                    <Delete/>
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          );
        })}
      </MUList>
    </>
  );
};

export default List;
