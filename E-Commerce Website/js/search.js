document.addEventListener("DOMContentLoaded", async () => {
    const search = document.getElementById('searchBar');

    async function searchBar(event){


        let input = event.target;
        if(event.key === 'Enter'){
            event.preventDefault();
            console.log(input.value);
            const params = new URLSearchParams(window.location.search);
            params.set('category', input.value);
            window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);

            const productList = document.getElementById("productList");
            // productList.innerHTML = '';
            console.log(productList)

            if(productList){
                console.log(productList)

                const productList = document.getElementById("productList");
                productList.innerHTML = '';
                Loader();
                const product = await fetchProductsByCategory(input.value);
                await populateProducts(false, product)
                .then(() => {
                    removeLoader();
                });
            }
        }
        window.location.href = 'productList.html';
    }
    search.addEventListener('keydown', searchBar);


     async function populateProducts(flag,customProducts){
        let products = customProducts;
        const queryParamsObject = getQueryParams();
        console.log(queryParamsObject);
        if(flag == false){
            if(queryParamsObject['category']) {
                products = await fetchProductsByCategory(queryParamsObject['category']);
            } else {
                products = await fetchProducts();
            }
        }       
        const productList = document.getElementById("productList");
        products.forEach(product => {
            const productItem = document.createElement("a");
            productItem.target = "_blank";
            productItem.classList.add("product-item", "text-decoration-none", "d-inline-block")
            productItem.href = `productDetails.html?id=${product.id}`;

            const productImage = document.createElement("div");
            const productName = document.createElement("div");
            const productPrice = document.createElement("div");

            productImage.classList.add("product-img");
            productName.classList.add("product-name", "text-center");
            productPrice.classList.add("product-price", "text-center");

            productName.textContent = product.title.substring(0, 12) + "..."; 
            productPrice.textContent = `\u0024 ${product.price}`;

            const imageInsideProductImage = document.createElement("img");
            imageInsideProductImage.src = product.image;

            // append divs
            productImage.appendChild(imageInsideProductImage);
            productItem.appendChild(productImage);
            productItem.appendChild(productName);
            productItem.appendChild(productPrice);

            productList.appendChild(productItem);

        });
    }
})