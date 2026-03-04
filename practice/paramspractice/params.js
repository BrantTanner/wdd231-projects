const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

console.log(window.location);

function getParams(param){
    const paramString = window.location.search;
    const params = new URLSearchParams(paramString);
    return params.get(param);
}

function productTemplate(product){
    return `<section class="product">
    <img src=${product.image} alt="${product.name}>"
    <h3> ${product.name}</h3>
    <p>${product.price}</p>
    </section>`;
}

function getProductDetails() {
    const id = getParams("id");
    const product = products.find((p) => p.id === parseInt(id));
    if (product) {
        document.querySelector("main")
        .insertAdjacentHTML("beforeend", productTemplate(product));
    }
}

getProductDetails();

console.log("id", getParams("id"));