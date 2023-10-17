const generateRandomAmount = () => ((Math.random() * 1200) - 400).toFixed(2); // random amount 

const generateRandomDate = () => {
  const start = new Date(2022, 0, 1); // Start date
  const end = new Date(); // End date
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const generateRandomTransactions = (count) => {
  const transactions = [];

  for (let i = 0; i < count; i++) {
    transactions.push({
      id: i + 1,
      amount: parseFloat(generateRandomAmount()),
      date: generateRandomDate().toISOString().slice(0, 10), // YYYY-MM-DD
      userid: 1,
    });
  }

  return transactions;
};

export const calculate_balance = (transactions) =>
  parseFloat(
    transactions
      .reduce((sum, transaction) => sum + transaction.amount, 0)
      .toFixed(2)
  );
