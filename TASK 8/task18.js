const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    let costliestProduct = products[0];

    products.forEach((currentElement) => {

        if(currentElement.price > costliestProduct.price){

            costliestProduct = currentElement;

        }

    });

    productContainer.innerHTML = `

    <div class="card">

        <img src="${costliestProduct.image}" alt="Product Image">

        <h3>${costliestProduct.title}</h3>

        <p>Category : ${costliestProduct.category}</p>

        <p>Price : $${costliestProduct.price}</p>

        <p>Rating : ⭐ ${costliestProduct.rating.rate}</p>

        <button>Buy Now</button>

    </div>

    `;

})
.catch(() => {

    productContainer.innerHTML = `
        <h2>❌ Unable to Load Products</h2>
        <p>Please try again later.</p>
    `;

});