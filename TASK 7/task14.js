// Digital Clock

let clock = setInterval(function () {

    let time = new Date();

    console.log(time.toLocaleTimeString());

}, 1000);

// Stop after 10 seconds
setTimeout(function () {

    clearInterval(clock);

    console.log("Clock Stopped");

}, 10000);