function bonus(salary) {
    return function (bonusAmount) {
        console.log("Total Salary :", salary + bonusAmount);
    };
}

bonus(50000)(5000);