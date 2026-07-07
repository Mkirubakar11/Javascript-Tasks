let company = " Stackly IT ";

// Convert to Uppercase
console.log("Uppercase");
console.log(company.toUpperCase());

console.log("");

// Convert to Lowercase
console.log("Lowercase");
console.log(company.toLowerCase());

console.log("");

// Remove Spaces
console.log("Remove Spaces");

let newCompany = company.trim();
console.log(newCompany);

console.log("");

// Replace "IT" with "Software"
console.log("Replace");

let replaceCompany = newCompany.replace("IT", "Software");
console.log(replaceCompany);

console.log("");

// Check whether "Stackly" exists
console.log("Includes");

let check = newCompany.includes("Stackly");
console.log(check);

console.log("");

// Split using Space
console.log("Split");

let splitCompany = newCompany.split(" ");
console.log(splitCompany);