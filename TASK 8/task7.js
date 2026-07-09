const productContainer = document.querySelector("#productContainer");
const search = document.querySelector("#search");

let allProducts = [];

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    allProducts = products;

    displayProducts(products);

})
.catch(() => {

    productContainer.innerHTML = `
        <h2>❌ Unable to Load Products</h2>
    `;

});

search.addEventListener("keyup", () => {

    productContainer.innerHTML = "";

    allProducts.forEach((currentElement) => {

        if(
            currentElement.title
            .toLowerCase()
            .includes(search.value.toLowerCase())
        ){

            productContainer.innerHTML += `

            <div class="card">

                <img src="${currentElement.image}">

                <h3>${currentElement.title}</h3>

                <p><strong>Price :</strong> $${currentElement.price}</p>

            </div>

            `;

        }

    });

});

function displayProducts(products){

    products.forEach((currentElement) => {

        productContainer.innerHTML += `

        <div class="card">

            <img src="${currentElement.image}">

            <h3>${currentElement.title}</h3>

            <p><strong>Price :</strong> $${currentElement.price}</p>

        </div>

        `;

    });

}