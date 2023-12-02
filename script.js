let productsGrid = document.querySelector(".product-grid")
let productArray = []
let xhr = new XMLHttpRequest()
let url = "https://my-json-server.typicode.com/YehorSlivinskiy/yehormarketplace/db"

xhr.open("GET", url)
xhr.responseType = "json"
xhr.onload = ()=>{
    productArray = xhr.response.products
    productsGrid.innerHTML = ""
    productArray.forEach(p =>{
        productArray.push(p)
        let pElem = document.createElement("div")
        pElem.classList.add("product")
        pElem.innerHTML = `
        <img src="${p.img}" alt="">
                <h2 class="product-name">${p.name}</h2>
                <p class="product-desc">${p.description}</p>
                <a href="profile/profile.hrml?id=${p.author_id}">Seller product</a>
                <div class="price-bar">
                    <p class="product-price">${p.price}$</p>
                    <button onclick="addProductToCart(${p.id})"><i class="fa-solid fa-plus"></i></button>
        `
        productsGrid.append(pElem)
    });
}

xhr.send()