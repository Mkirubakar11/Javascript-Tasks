const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    products.forEach((currentElement) => {

        if(currentElement.category === "women's clothing"){

            productContainer.innerHTML += `

            <div class="card">

                <img src="${currentElement.image}">

                <h3>${currentElement.title}</h3>

                <p><strong>Category :</strong> ${currentElement.category}</p>

                <p><strong>Price :</strong> $${currentElement.price}</p>

                <p><strong>Rating :</strong> ⭐ ${currentElement.rating.rate}</p>

                <button>Buy Now</button>

            </div>

            `;

        }

    });

})
.catch(() => {

    productContainer.innerHTML = `
        <h2>❌ Unable to Load Products</h2>
    `;

});