function checkResult(marks) {
    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log("Result :", checkResult(72));