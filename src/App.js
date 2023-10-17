import React, { useState, useEffect } from "react";
import "./App.css";
import { calculate_balance, generateRandomTransactions } from "./utils";
import AppBar from "./components/AppBar";
import CustomCard from "./components/CustomCard";
import { get_user_info } from "./api";
import Typography from "@mui/material/Typography";
import TransactionsList from "./components/TransactionsList";
import { CircularProgress } from "@mui/material";


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    get_user_info()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error getting data:", error));
  }, []);

  return (
    <div className="continer">
      <AppBar />
      {loading ? (
        <div className="text-center my-4">
          <CircularProgress />
        </div>
      ) : (
        <div className="row p-4">
          <div className="col-6">
            <CustomCard
              balance={calculate_balance(data.transactions)}
              account_number={data.account_number}
              type="balance"
            />
          </div>

          <div className="col-6">
            <CustomCard
              user_name={data.user_name}
              iban={data.iban}
              type="info"
              last_login={data.last_login}
            />
          </div>
          <div className="row">
            <Typography className="col-12 mt-4 " variant="h5" component="div">
              Transactions
            </Typography>
          </div>
          <div className="row">
            <TransactionsList transactions={data.transactions} />
          </div>
        </div>
      )}

      {/* {trans.map((item) => (
        <p>
          {item.userid} {item.date} {item.amount} {item.id}
        </p>
      ))}
      <p>{calculate_balance(trans)}</p> */}
    </div>
  );
}

export default App;
