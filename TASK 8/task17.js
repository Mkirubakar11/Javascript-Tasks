const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    let cheapestProduct = products[0];

    products.forEach((currentElement) => {

        if(currentElement.price < cheapestProduct.price){

            cheapestProduct = currentElement;

        }

    });

    productContainer.innerHTML = `

    <div class="card">

        <img src="${cheapestProduct.image}" alt="Product Image">

        <h3>${cheapestProduct.title}</h3>

        <p>Category : ${cheapestProduct.category}</p>

        <p>Price : $${cheapestProduct.price}</p>

        <p>Rating : ⭐ ${cheapestProduct.rating.rate}</p>

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