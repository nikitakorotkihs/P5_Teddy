fetch('http://localhost:3000/api/teddies')
    .then(response => response.json())
    .then(json => console.log(json));



function createProductCard(product) {
    console.log(product);
    let url = product.imageUrl;
    // Define card element
    let card = document.createElement("div");
    card.classList.add("poloroid");
    let ProductImg = document.createElement("img");
    ProductImg.classList.add("product-image");
    ProductImg.src = url;

    let product_info = document.createElement("div");
    product_info.classList.add("product-info");

    let product_description = document.createElement("div");
    product_description.classList.add("product-description");
    product_description.innerText = product.description;

    let product_color = document.createElement("div");
    product_color.classList.add("product-color");
    product_color.innerText = product.color;

    let product_price = document.createElement("div");
    product_price.classList.add("product-price");
    product_price.innerText = product.price;




    card.appendChild(ProductImg);
    card.appendChild(product_info);
    product_info.appendChild(product_color);
    product_info.appendChild(product_price);
    product_info.appendChild(product_description);


    //Added 
    // Identify the product section and insert card to that product section
    let productSection = document.querySelector("#product-section");
    productSection.appendChild(card);


}
let product_details = {
    'imageUrl': '/P5_Teddy/images/teddy_2.jpg',
    'price': '2900',
    'color': 'Blue',
    'description': 'Sample description'
}
createProductCard(product_details);