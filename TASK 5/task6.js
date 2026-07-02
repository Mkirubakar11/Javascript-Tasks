function dashboard() {
    console.log("Loading Dashboard...");
}

function login(callback) {
    console.log("Login Successful");
    callback();
}
login(dashboard);