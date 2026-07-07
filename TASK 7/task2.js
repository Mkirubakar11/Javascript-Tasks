let employees = [
    {
        name: "sankar",
        salary: 30000
    },
    {
        name: "subiksha",
        salary: 45000
    },
    {
        name: "Rishi",
        salary: 60000
    }
];

// 1. Find Highest Salary
let highest = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }
}

console.log("Highest Salary");
console.log(highest.name, highest.salary);

console.log("");

// 2. Find Lowest Salary
let lowest = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }
}

console.log("Lowest Salary");
console.log(lowest.name, lowest.salary);

console.log("");

// 3. Add 5000 Bonus
console.log("Salary After 5000 Bonus");

for (let i = 0; i < employees.length; i++) {
    let bonusSalary = employees[i].salary + 5000;
    console.log(employees[i].name, bonusSalary);
}

console.log("");

// 4. Print Total Salary
let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
    totalSalary = totalSalary + employees[i].salary;
}

console.log("Total Salary");
console.log(totalSalary);

console.log("");

// 5. Employees Earning Above 40000
console.log("Employees Earning Above 40000");

for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > 40000) {
        console.log(employees[i].name, employees[i].salary);
    }
}