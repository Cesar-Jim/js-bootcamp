const account = {
  name: 'Cesar Jimenez',
  expenses: [],
  income: [],

  addExpense: function(description, amount) {
    const newExpense = {
      description,
      amount,
    };

    this.expenses.push(newExpense);
  },

  addIncome: function(description, amount) {
    const newIncome = {
      description,
      amount,
    };

    this.income.push(newIncome);
  },

  getAccountSummary: function(account) {
    let totalIncome = 0;
    let totalExpenses = 0;
    let accountBalance = 0;

    this.expenses.forEach(function(expense) {
      totalExpenses += expense.amount;
    });

    this.income.forEach(function(income) {
      totalIncome += income.amount;
    });

    accountBalance = totalIncome - totalExpenses;

    return `${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
  },
};

// calls
account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addIncome('Job', 1000);
const myExpensesSummary = account.getAccountSummary(account);
console.log(myExpensesSummary);
