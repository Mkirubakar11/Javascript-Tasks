//1.Store employee name using var
var employeeName="KIRUBAKAR M";
//2.Store emloyee age using let
let employeeAge = 23;
//3.Store company name using const
const companyName="Stackly";
//4.print all details using console.log()
console.log("Employee Name:",employeeName);
console.log("Employee Age",employeeAge);
console.log("Company Name",companyName);
//______________________________________
//5.Show a popup message
alert("Welcome to Employee portal");
//-------------------------------------
//6.Ask the employee if today's task is completed
let taskCompleted=confirm("Have you Completed today 's task?") ;
console.log(taskCompleted);
//........................................
//7.Ask the employee name using prompt()
let enteredName=prompt("Enter your name");
console.log("Enter Name:",enteredName);
//---------------------------------------
//8.Display the entered employee name on the webpage
document.writeln("Welcome"+enteredName);
//____________________________________________
//9.Print a sucess message
console.warn("Task submitted successfully");
//......................................
//10.print an error message
console.error("Task submission failed");
//----------------------------------------
//Bonus Task:
//Update  employee age after promotion
employeeAge=24;
console.log("Update Employee Age :",employeeAge)