const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    products.forEach((currentElement,index) => {

        productContainer.innerHTML += `

        <div class="card">

            <h2>Product ${index + 1}</h2>

            <img src="${currentElement.image}">

            <h3>${currentElement.title}</h3>

            <p>Price : $${currentElement.price}</p>

            <button>Buy Now</button>

        </div>

        `;

    });

})
.catch(() => {

    productContainer.innerHTML = `
        <h2>❌ Unable to Load Products</h2>
    `;

});