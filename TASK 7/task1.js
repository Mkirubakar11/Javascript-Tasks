let students = [
    {
        name: "carl",
        id: 101,
        mark: 85
    },
    {
        name: "shakreesh",
        id: 102,
        mark: 45
    },
    {
        name: "karan",
        id: 103,
        mark: 25
    }
];

// 1. Print all students
console.log("All Students");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

console.log("");

// 2. Print only student names
console.log("Student Names");
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

console.log("");

// 3. Find student ID 102
console.log("Student with ID 102");
for (let i = 0; i < students.length; i++) {
    if (students[i].id == 102) {
        console.log(students[i]);
    }
}

console.log("");

// 4. Print students who passed
console.log("Passed Students");
for (let i = 0; i < students.length; i++) {
    if (students[i].mark >= 35) {
        console.log(students[i].name + " - " + students[i].mark);
    }
}

console.log("");

// 5. Count total students
console.log("Total Students: " + students.length);