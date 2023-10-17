import { generateRandomTransactions } from "../utils";

export const get_user_info = () => {
  // Pretending there's an API call here
  return new Promise((ressolve, reject) => {
    setTimeout(() => {
      ressolve({
        transactions: generateRandomTransactions(10),
        user_id: 1,
        user_name: "Abdallah Yahya",
        iban: "FI89 3704 0044 0532 0130 00", //Fake ofcourse
        account_number: "0532013000",
        last_login: "25-08-2024 19:08:33"
      });
    }, 2000); // Fake 2 secs API Call
  });
};
