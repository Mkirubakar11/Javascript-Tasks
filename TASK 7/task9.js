// Movie Ticket Booking

let age = Number(prompt("Enter Your Age"));

let ticket = confirm("Do you want to book a movie ticket?");

if (age >= 18 && ticket) {
    console.log("Allow Movie");
} else {
    console.log("Not Allowed");
}