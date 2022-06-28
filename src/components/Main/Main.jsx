import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CartContent,
  Typography,
  Grid,
  Divider,
  CardContent,
} from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
const Main = () => {
  const classes = useStyles();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dating = new Date();
  const day=weekday[dating.getDay()];
  const [dayName, getDayName] = useState(day);

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
        <CardContent>
          <Typography variant="h5" align="center">
            Total Balance $100
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{
              lineHeight: "1.5em",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            Try saying: Add income $100 in category Salary for {dayName}
          </Typography>
          <Divider />
          <Form />
        </CardContent>
        <CardContent className={classes.cartContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Main;
