import { useContext } from "react";
import { expenseContextTracker } from "./context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./components/Main/Form/constants/categories";
/*
const title = [
  { id: 1, type: "Income", amount: 50 },
  { id: 2, type: "Income", amount: 10 },
  { id: 3, type: "Income", amount: 100 },
  { id: 4, type: "Income", amount: 200 },
];*/
const useTransactions = (title) => {
  // resetCategories();
  const { transactions } = useContext(expenseContextTracker);
  const transactionPerType = transactions.filter((t) => t.type === title);
  const total = transactionPerType.reduce(
    (acc, currValue) => acc + currValue.amount,
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;
  transactionPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) category.amount = category.amount + t.amount;
  });
  const filteredCategory = categories.filter((c) => c.amount > 0);
  /*const options = {
    legend: {
      display: false,
      position: "right",
    },
  };*/
  const chartData = {
    maintainAspectRatio: false,
    responsive: false,
    datasets: [
      {
        data: filteredCategory.map((c) => c.amount),
        backgroundColor: filteredCategory.map((c) => c.color),
      },
    ],
    labels: filteredCategory.map((c) => c.type),
  };

  return { transactionPerType, total, chartData, filteredCategory };
};
export default useTransactions;
/*
let abc = [
  {
    type: "Income",
    category: "Gifts",
    amount: 140,
    date: "21-6-2022",
    id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
  },
  {
    type: "Income",
    category: "Investments",
    amount: 240,
    date: "21-6-2022",
    id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
  },
  {
    type: "Income",
    category: "Business",
    amount: 340,
    date: "21-6-2022",
    id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
  },
  {
    type: "Income",
    category: "Deposits",
    amount: 440,
    date: "21-6-2022",
    id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
  },
];
let ttp = abc.filter((t) => t.type === "Income");
let tot = ttp.reduce((acc, currVal) => acc + currVal, 0);
const incomeCategory = [
  { type: "Business", amount: 0, color: "#123123" },
  { type: "Investments", amount: 0, color: "#154731" },
  { type: "Extra income", amount: 0, color: "#165f40" },
  { type: "Deposits", amount: 0, color: "#16784f" },
];
abc.forEach((l) => {
  const cmd = incomeCategory.find((c) => c.type == l.category);
  //alert(cmd ? cmd : "not matched");
});
*/
/*
  abc.forEach((l)=>{
    const cmd = incomeCategory.find((c) => c.type == l.category);
    if(cmd) cmd.amount=cmd.amount+l.amount;
    //alert(cmd ? cmd : "not matched");
  })
  const fff=incomeCategory.find((f)=>f.type==="Deposits");
  const {type,amount,color}=fff;
  alert(type +" " +color +" " +amount);*/
  //final understanding
  /*
    let abc = [
    {
      type: "Income",
      category: "Gifts",
      amount: 140,
      date: "21-6-2022",
      id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
    },
    {
      type: "Income",
      category: "Investments",
      amount: 240,
      date: "21-6-2022",
      id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
    },
    {
      type: "Income",
      category: "Business",
      amount: 340,
      date: "21-6-2022",
      id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
    },
    {
      type: "Income",
      category: "Deposits",
      amount: 440,
      date: "21-6-2022",
      id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
    },
    {
      type: "Income",
      category: "Extra income",
      amount: 440,
      date: "21-6-2022",
      id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
    },
    {
      type: "Income",
      category: "Deposits",
      amount: 1040,
      date: "21-6-2022",
      id: "f8327cc3-1eaa-4d0e-9e80-220dbdfb7999",
    }
  ];
  let ttp = abc.filter((t) => t.type ==="Income");
  let tot = ttp.reduce((acc, currVal) => acc + currVal.amount, 0);
   const incomeCategory = [
    { type: "Business", amount: 0, color: "#123123" },
    { type: "Investments", amount: 0, color: "#154731" },
    { type: "Extra income", amount: 0, color: "#165f40" },
    { type: "Deposits", amount: 0, color: "#16784f" },
    { type: "Gifts", amount: 0, color: "#16784f" },
  ];
 //alert(tot);
 abc.forEach((l)=>{
 	const cmd=incomeCategory.find((f)=>f.type==l.category);
    //alert(type);
    if(cmd) cmd.amount=cmd.amount+l.amount;
    const {type,amount,color}=cmd;
    //alert(type +" " +amount +" " +color);
 })
 const filteredCategory=incomeCategory.filter((f)=>f.amount>0);
 filteredCategory.map((f)=>alert(f.color));
  */