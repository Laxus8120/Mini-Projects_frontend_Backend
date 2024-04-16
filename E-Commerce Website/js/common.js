
function getQueryParams() {
    const queryParams = new URLSearchParams(window.location.search);
    const queryParamsObject = Object.fromEntries(queryParams.entries());
    return queryParamsObject;
}

function removeLoader() {
    const loaderBackdrop = document.getElementById("loader-backdrop");
    loaderBackdrop.style.display = 'none';
}

function Loader(){
    const loaderBackdrop = document.getElementById("loader-backdrop");
    loaderBackdrop.style.display = 'flex';
}

async function fetchProductById(id) {
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return product.data;
}

async function fetchCartById(id) {
    const cart = await axios.get(`https://fakestoreapi.com/carts/${id}`);
    return cart.data;
}

async function fetchCategories(categories) {
    // this function is marked async so this will also return a promise
    const response = await fetch(`https://fakestoreapi.com/products/${categories}`);
    const data = await response.json();
    return data;
}

async function fetchProductsByCategory(category) {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    return response.data;
}

// document.addEventListener('DOMContentLoaded', function() {

//     // search bar 
//     const search = document.getElementById('searchBar');

//     async function searchBar(event){
        
//         let input = event.target;
//         if(event.key === 'Enter'){
//             event.preventDefault();
//             console.log(input.value);
//             const params = new URLSearchParams(window.location.search);
//             params.set('category', input.value);
//             window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
//         }
//     }
//     search.addEventListener('keydown', searchBar);
// });

