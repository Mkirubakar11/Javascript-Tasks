const search = document.querySelector("#search");
const category = document.querySelector("#category");
const productCount = document.querySelector("#productCount");
const productContainer = document.querySelector("#productContainer");

let allProducts = [];

// Fetch Products
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((products) => {

    allProducts = products;

    displayProducts(allProducts);

})
.catch(() => {

    productContainer.innerHTML = `
        <div class="error">
            <h2>❌ Unable to Load Products</h2>
            <p>Please try again later.</p>
        </div>
    `;

});

// Display Products
function displayProducts(products){

    productContainer.innerHTML = "";

    productCount.innerText = "Total Products : " + products.length;

    if(products.length === 0){

        productContainer.innerHTML = `
            <h2 class="noProduct">
                No Products Found
            </h2>
        `;

        return;
    }

    products.forEach((currentElement,index)=>{

        productContainer.innerHTML += `

        <div class="card">

            <h3>Product ${index+1}</h3>

            <img src="${currentElement.image}" alt="Product">

            <h4>${currentElement.title}</h4>

            <p><strong>Category :</strong> ${currentElement.category}</p>

            <p><strong>Price :</strong> $${currentElement.price}</p>

            <p><strong>Rating :</strong> ⭐ ${currentElement.rating.rate}</p>

            <button>Buy Now</button>

        </div>

        `;

    });

}

// Search Product
search.addEventListener("keyup", filterProducts);

// Filter Category
category.addEventListener("change", filterProducts);

// Filter Function
function filterProducts(){

    const searchValue = search.value.toLowerCase();

    const categoryValue = category.value;

    const filteredProducts = allProducts.filter((product)=>{

        const matchTitle =
        product.title.toLowerCase().includes(searchValue);

        const matchCategory =
        categoryValue === "all" ||
        product.category === categoryValue;

        return matchTitle && matchCategory;

    });

    displayProducts(filteredProducts);

}