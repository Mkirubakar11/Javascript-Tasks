// Higher Order Methods

// C - Create
let employees = [
    {
        name: "Kirubakar",
        salary: 25000
    },
    {
        name: "Sathish",
        salary: 38000
    },
    {
        name: "praveen",
        salary: 55000
    },
    {
        name: "vaishu",
        salary: 72000
    }
];
console.log("Employee Details");

employees.forEach((c, i, t) => {
    console.log(c.name, c.salary);
});

console.log("");

// map() - Increase every salary by 5000
console.log("After Salary Increase");

let newMap = employees.map((c, i, t) => {
    return {
        name: c.name,
        salary: c.salary + 5000
    };
});

console.log(newMap);

console.log("");

// filter() - Salary greater than 30000
console.log("Salary Greater Than 30000");

let newFilter = employees.filter((c, i, t) => {
    return c.salary > 30000;
});

console.log(newFilter);

console.log("");

// find() - Find salary 55000
console.log("Find Salary 55000");

let newFind = employees.find((c, i, t) => {
    return c.salary == 55000;
});

console.log(newFind);

console.log("");

// reduce() - Calculate total salary
console.log("Total Salary");

let totalSalary = employees.reduce((total, c) => {
    return total + c.salary;
}, 0);

console.log(totalSalary);

console.log("");

// some() - Check salary greater than 60000
console.log("Salary Greater Than 60000");

let newSome = employees.some((c, i, t) => {
    return c.salary > 60000;
});

console.log(newSome);

console.log("");

// every() - Check salary greater than 15000
console.log("Salary Greater Than 15000");

let newEvery = employees.every((c, i, t) => {
    return c.salary > 15000;
});

console.log(newEvery)