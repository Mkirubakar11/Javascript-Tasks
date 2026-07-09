const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    products.forEach((currentElement) => {

        productContainer.innerHTML += `

        <div class="card">

            <h3>${currentElement.title}</h3>

        </div>

        `;

    });

})
.catch(() => {

    productContainer.innerHTML = `
        <h2> Unavailable to Load Products</h2>
    `;

});