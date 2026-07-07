let employees = [
    {
        id: 101,
        name: "Kirubakar",
        department: "Developer",
        salary: 60000
    },
    {
        id: 102,
        name: "Kishore",
        department: "Tester",
        salary: 50000
    },
    {
        id: 103,
        name: "Vishal",
        department: "Designer",
        salary: 40000
    },
    {
        id: 104,
        name: "Vadivel",
        department: "HR",
        salary: 30000
    }
];

// viewEmployees
function viewEmployees() {
    console.log("----- Employee List -----");

    for (let emp of employees) {
        console.log(emp);
    }
}

// searchEmployee
function searchEmployee() {

    let id = Number(prompt("Enter Employee ID"));

    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        console.log(employee);
    } else {
        console.log("Employee Not Found");
    }
}

// addBonus
function addBonus() {

    let bonus = Number(prompt("Enter Bonus Amount"));

    employees = employees.map(emp => ({
        ...emp,
        salary: emp.salary + bonus
    }));

    console.log("Bonus Added Successfully");
    console.log(employees);
}

// highestSalary
function highestSalary() {

    let highest = employees.reduce((max, emp) =>
        emp.salary > max.salary ? emp : max
    );

    console.log("Highest Salary Employee");
    console.log(highest);
}

//lowestSalary
function lowestSalary() {

    let lowest = employees.reduce((min, emp) =>
        emp.salary < min.salary ? emp : min
    );

    console.log("Lowest Salary Employee");
    console.log(lowest);
}

// totalSalary
function totalSalary() {

    let total = employees.reduce((sum, emp) =>
        sum + emp.salary, 0);

    console.log("Total Salary =", total);
}

// salaryAbove40000
function salaryAbove40000() {

    let result = employees.filter(emp => emp.salary > 40000);

    console.log("Salary Above 40000");

    result.forEach(emp => console.log(emp));
}

// Callback Function
function printReport(callback) {

    console.log("========== Employee Report ==========");

    callback();

    console.log("========== End ==========");
}

// report()
function report() {

    employees.forEach(emp => {

        console.log(`
Employee ID : ${emp.id}
Employee Name : ${emp.name}
Department : ${emp.department}
Salary : ₹${emp.salary}
-----------------------------`);

    });

}

// currentDateTime
function currentDateTime() {

    let today = new Date();

    console.log(today.toLocaleString());
}

// Promise (Fetch API)
function fetchEmployees() {

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response => response.json())

        .then(data => {

            console.log("Employee Data From API");

            data.forEach(emp => {

                console.log(emp.id + " - " + emp.name);

            });

        })

        .catch(error => {

            console.log(error);

        });

}


let choice = Number(prompt(

`Employee Payroll System

1. View Employees
2. Search Employee by ID
3. Add Bonus
4. Highest Salary
5. Lowest Salary
6. Total Salary
7. Salary Above 40000
8. Print Report
9. Current Date & Time
10. Fetch Employee Data
11. Exit`));

switch (choice) {

    case 1:
        viewEmployees();
        break;

    case 2:
        searchEmployee();
        break;

    case 3:
        addBonus();
        break;

    case 4:
        highestSalary();
        break;

    case 5:
        lowestSalary();
        break;

    case 6:
        totalSalary();
        break;

    case 7:
        salaryAbove40000();
        break;

    case 8:
        printReport(report);
        break;

    case 9:
        currentDateTime();
        break;

    case 10:
        fetchEmployees();
        break;

    case 11:
        console.log("Thank You");
        break;

    default:
        console.log("Invalid Choice");
}