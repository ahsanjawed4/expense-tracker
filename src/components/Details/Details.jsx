import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Tooltip, Title, ArcElement, Legend, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles";
import useTransactions from "../../useTransactions";
const Details = ({ title }) => {
  Chart.register(Tooltip, Title, ArcElement, Legend);
  const classes = useStyles();
  const { transactionPerType, total, chartData, filteredCategory, options } =
    useTransactions(title);
  console.log(transactionPerType);
  return (
    <>
      <Card className={title === "Income" ? classes.income : classes.expense}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">{total}</Typography>
          {total ? <Doughnut data={chartData} /> : ""}
        </CardContent>
      </Card>
    </>
  );
};

export default Details;
