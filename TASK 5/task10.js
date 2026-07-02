let employeePersonal = {
    name: "Kirubakar",
    age: 23,
    city: "TAMILNADU"
};

let employeeOffice = {
    id: 101,
    department: "Development",
    salary: 50000
};

let employee = {...employeePersonal,...employeeOffice};
console.log(employee);