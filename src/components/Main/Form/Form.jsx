import React, { useState, useContext } from "react";
import { expenseContextTracker } from "../../../context/context";
import { incomeCategories, expenseCategories } from "./constants/categories";
import FormDate from "./utils/FormDate";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  type: "",
  category: "",
  amount: "",
  date: FormDate(new Date()),
};
const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const { addTransactions } = useContext(expenseContextTracker);
  const classes = useStyles();
  const categories =
    formData.type === "Income" ? incomeCategories : expenseCategories;
  //console.log(formData.date);
  //console.log(formData);
  const createTransaction = () => {
    const transaction = {
      ...formData,
      amount: Number(formData.amount),
      id: uuidv4(),
    };
    addTransactions(transaction);
    setFormData(initialState);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="subtitle2" gutterBottom>
            .....
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              value={formData.type}
              onChange={(e) => {
                return setFormData({ ...formData, type: e.target.value });
              }}
            >
              <MenuItem value="Income">Income</MenuItem>
              <MenuItem value="Expense">Expense</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={formData.category}
              onChange={(c) => {
                return setFormData({ ...formData, category: c.target.value });
              }}
            >
              {categories?.map((c) => {
                return (
                  <MenuItem value={c.type} key={c.type}>
                    {c.type}
                  </MenuItem>
                );
              })}

              <MenuItem value="salary">Salary</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="text"
            label="amount"
            fullWidth
            value={formData.amount}
            onChange={(a) => {
              return setFormData({ ...formData, amount: a.target.value });
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            type="date"
            label="date"
            fullWidth
            value={formData.date}
            onChange={(d) => {
              return setFormData({
                ...formData,
                date: d.target.value,
              });
            }}
          />
        </Grid>
        <Button
          className={classes.button}
          variant="outlined"
          color="primary"
          fullWidth
          onClick={createTransaction}
        >
          Create
        </Button>
      </Grid>
    </>
  );
};

export default Form;
