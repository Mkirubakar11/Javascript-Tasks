// Fake Store API

fetch("https://fakestoreapi.com/products")
.then(function(response) {
    return response.json();
})
.then(function(products) {

    // Print all product titles
    console.log("Product Titles");

    products.forEach(function(product) {
        console.log(product.title);
    });

    console.log("");

    // Print only prices
    console.log("Product Prices");

    products.forEach(function(product) {
        console.log(product.price);
    });

    console.log("");

    // Print products costing more than 100
    console.log("Products Costing More Than 100");

    let costlyProducts = products.filter(function(product) {
        return product.price > 100;
    });

    console.log(costlyProducts);

    console.log("");

    // Count total products
    console.log("Total Products");
    console.log(products.length);

    console.log("");

    // Print category names
    console.log("Category Names");

    products.forEach(function(product) {
        console.log(product.category);
    });

});