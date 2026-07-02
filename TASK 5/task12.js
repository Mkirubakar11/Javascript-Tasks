function student(name, ...marks) {

    let total = marks.reduce((sum, mark) => sum + mark, 0);

    let average = total / marks.length;

    console.log("Student :", name);
    console.log("Total Marks :", total);
    console.log("Average :", average);
}

student("Ravisankar", 90, 85, 88, 95);