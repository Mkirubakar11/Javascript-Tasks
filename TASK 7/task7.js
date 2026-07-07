// ATM Machine

let balance = 50000;

// Display menu
let choice = Number(prompt(
    "ATM Menu\n" +
    "1. Balance\n" +
    "2. Deposit\n" +
    "3. Withdraw\n" +
    "4. Exit"
));

// Perform operation
switch (choice) {

    case 1:
        // Show balance
        console.log("Balance");
        console.log(balance);
        break;

    case 2:
        // Deposit money
        let deposit = Number(prompt("Enter Deposit Amount"));
        balance = balance + deposit;
        console.log("Updated Balance");
        console.log(balance);
        break;

    case 3:
        // Withdraw money
        let withdraw = Number(prompt("Enter Withdraw Amount"));
        balance = balance - withdraw;
        console.log("Updated Balance");
        console.log(balance);
        break;

    case 4:
        // Exit ATM
        console.log("Thank You");
        break;

    default:
        // Invalid option
        console.log("Invalid Choice");
}