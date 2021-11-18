let productId = "5be9c8541c9d440000665243";
fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then(response => response.json())
    .then(json => createProductCard(json));

function createProductCard(product) {
    console.log
    let url = product.imageUrl;
    // Define card element
    let card = document.createElement("div");
    card.classList.add("product-container");

    let ProductImg = document.createElement("img");
    ProductImg.classList.add("product-img");
    ProductImg.src = url;

    let product_info = document.createElement("div");
    product_info.classList.add("product-info");

    let product_name = document.createElement("div");
    product_name.classList.add("product-name");
    product_name.innerText = product.name;

    let product_price = document.createElement("div");
    product_price.classList.add("product-price");
    product_price.innerText = product.price;

    let product_color = document.createElement("div");
    product_color.classList.add("change-color");
    product_color.innerText = product.color;

    let product_description = document.createElement("div");
    product_description.classList.add("product-description");
    product_description.innerText = product.description;


    card.appendChild(ProductImg);
    card.appendChild(product_info);
    product_info.appendChild(product_name);
    product_info.appendChild(product_price);
    product_info.appendChild(product_description);
    product_info.appendChild(product_color);



    //Added 
    // Identify the product section and insert card to that product section
    let productSection = document.querySelector("#product-section");
    productSection.appendChild(card);
}