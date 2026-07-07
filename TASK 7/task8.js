// Cricket Score

let score = [10, 25, 40, 60, 80, 100];

// Highest Score
let highest = score[0];

for (let i = 1; i < score.length; i++) {
    if (score[i] > highest) {
        highest = score[i];
    }
}

console.log("Highest Score");
console.log(highest);

console.log("");

// Lowest Score
let lowest = score[0];

for (let i = 1; i < score.length; i++) {
    if (score[i] < lowest) {
        lowest = score[i];
    }
}

console.log("Lowest Score");
console.log(lowest);

console.log("");

// Total Score
let total = 0;

for (let i = 0; i < score.length; i++) {
    total = total + score[i];
}

console.log("Total Score");
console.log(total);

console.log("");

// Average Score
let average = total / score.length;

console.log("Average Score");
console.log(average);