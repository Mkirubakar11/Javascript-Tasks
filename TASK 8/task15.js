const productContainer = document.querySelector("#productContainer");

fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    products.forEach((currentElement) => {

        let description = currentElement.description;

        if(description.length > 100){
            description = description.substring(0,100) + "... Read More";
        }

        productContainer.innerHTML += `

        <div class="card">

            <img src="${currentElement.image}" alt="Product Image">

            <h3>${currentElement.title}</h3>

            <p>${description}</p>

            <p><strong>Price :</strong> $${currentElement.price}</p>

            <button>Buy Now</button>

        </div>

        `;

    });

})
.catch(() => {

    productContainer.innerHTML = `
        <h2>❌ Unable to Load Products</h2>
        <p>Please try again later.</p>
    `;

});