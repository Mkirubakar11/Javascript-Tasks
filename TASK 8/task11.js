const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    products.forEach((currentElement) => {

        if(currentElement.category === "jewelery"){

            productContainer.innerHTML += `

            <div class="card">

                <img src="${currentElement.image}">

                <h3>${currentElement.title}</h3>

                <p>${currentElement.category}</p>

                <p>Price : $${currentElement.price}</p>

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