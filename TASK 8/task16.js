const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    let highestRated = products[0];

    products.forEach((currentElement) => {

        if(currentElement.rating.rate > highestRated.rating.rate){

            highestRated = currentElement;

        }

    });

    productContainer.innerHTML = `

    <div class="card">

        <img src="${highestRated.image}" alt="Product Image">

        <h3>${highestRated.title}</h3>

        <p>Category : ${highestRated.category}</p>

        <p>Price : $${highestRated.price}</p>

        <p>Rating : ⭐ ${highestRated.rating.rate}</p>

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