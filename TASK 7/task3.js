let products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Mouse",
        price: 500
    },
    {
        name: "Keyboard",
        price: 1500
    }
];

// 1. Print Product Names
console.log("Product Names");

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}

console.log("");

// 2. Print Total Bill
let totalBill = 0;

for (let i = 0; i < products.length; i++) {
    totalBill = totalBill + products[i].price;
}

console.log("Total Bill");
console.log(totalBill);

console.log("");

// 3. Search Product "Mouse"
console.log("Search Product");

for (let i = 0; i < products.length; i++) {
    if (products[i].name == "Mouse") {
        console.log(products[i].name, products[i].price);
    }
}

console.log("");

// 4. Apply 10% Discount
console.log("Price After 10% Discount");

let finalBill = 0;

for (let i = 0; i < products.length; i++) {
    let discountPrice = products[i].price - (products[i].price * 10 / 100);
    console.log(products[i].name, discountPrice);
    finalBill = finalBill + discountPrice;
}

console.log("");

// 5. Print Final Bill
console.log("Final Bill");
console.log(finalBill);