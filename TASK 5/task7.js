function display(step) {
    console.log(step);
}

function foodDelivery(callback) {
    callback("Order Received");
    callback("Preparing Food");
    callback("Out for Delivery");
    callback("Delivered");
}

foodDelivery(display);