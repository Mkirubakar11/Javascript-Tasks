let account = {
    name: "Kirubakar",
    balance: 50000
};

// 1. Deposit 10000
account.balance = account.balance + 10000;

console.log("After Deposit");
console.log(account.balance);

console.log("");

// 2. Withdraw 5000
account.balance = account.balance - 5000;

console.log("After Withdraw");
console.log(account.balance);

console.log("");

// 3. Print Current Balance
console.log("Current Balance");
console.log(account.balance);

console.log("");

// 4. Check Balance is Below 20000
console.log("Balance Check");

if (account.balance < 20000) {
    console.log("Balance is Below 20000");
} else {
    console.log("Balance is Above 20000");
}

console.log("");

// 5. Print Account Details
console.log("Account Details");
console.log(account.name);
console.log(account.balance);