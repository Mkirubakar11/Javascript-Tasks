// Employee Management System

let employees = [
    { id: 101, name: "Hari", salary: 50000 },
    { id: 102, name: "Ashwin", salary: 40000 }
];

// 1. Add Employee
function addEmployee(id, name, salary) {
    employees.push({id, name, salary});
    console.log("Employee Added Successfully");
}

// 2. View Employees
function viewEmployees() {
    console.log("Employee List:");
    console.log(employees);
}

// 3. Search Employee by ID
function searchEmployee(id) {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        console.log("Employee Found:", employee);
    } else {
        console.log("Employee Not Found");
    }
}

// 4. Calculate Salary + Bonus
function calculateSalary(id, bonus) {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        let totalSalary = employee.salary + bonus;
        console.log("Total Salary :", totalSalary);
    } else {
        console.log("Employee Not Found");
    }
}

// 5. Remove Employee
function removeEmployee(id) {
    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee Removed Successfully");
    } else {
        console.log("Employee Not Found");
    }
}

// 6. Sort Employees by Salary
function sortEmployees() {
    employees.sort((a, b) => a.salary - b.salary);
    console.log("Employees Sorted by Salary");
    console.log(employees);
}

// 7. Find Employee by Name
function findEmployeeByName(name) {
    let employee = employees.find(emp => emp.name === name);

    if (employee) {
        console.log("Employee Found:", employee);
    } else {
        console.log("Employee Not Found");
    }
}

// 8. Display Employee Details using Destructuring
function displayEmployee(id) {
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        let { name, salary } = employee;

        console.log("Employee Name :", name);
        console.log("Salary :", salary);
    } else {
        console.log("Employee Not Found");
    }
}

// Function Calls

addEmployee(103, "kirubakar", 70000);

viewEmployees();

searchEmployee(102);

calculateSalary(101, 5000);

removeEmployee(102);

viewEmployees();

sortEmployees();

findEmployeeByName("kirubakar");

displayEmployee(103);