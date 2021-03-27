let pizza_class = document.getElementsByClassName("pizza_class")
let garlic_bread_class = document.getElementsByClassName("garlic_bread_class")
let pasta_class = document.getElementsByClassName("pasta_class")
let drink_class = document.getElementsByClassName("drink_class")
let extra_class = document.getElementsByClassName("extra_class")
let side_class = document.getElementsByClassName("side_class")

let only_pizzas = document.getElementById("only_pizzas");
let only_sides = document.getElementById("only_sides");
let only_drinks = document.getElementById("only_drinks");
let only_extras = document.getElementById("only_extras");
let hide_nothing = document.getElementById("hide_nothing");

localStorage.clear();
function hide_pizzas() {
    console.log("in funtion");
    for (let i = 0; i < pizza_class.length; i++) {
        pizza_class[i].style.display = "none";
    }
}

function hide_drinks() {
    console.log("in funtion");
    for (let i = 0; i < drink_class.length; i++) {
        drink_class[i].style.display = "none";
    }
}

function hide_sides() {
    console.log("in funtion");
    for (let i = 0; i < side_class.length; i++) {
        side_class[i].style.display = "none";
    }
}
function hide_extra() {
    console.log("in funtion");
    for (let i = 0; i < extra_class.length; i++) {
        extra_class[i].style.display = "none";
    }
}

function show_all() {
    for (let i = 0; i < extra_class.length; i++) {
        extra_class[i].style.display = "block";
    }
    for (let i = 0; i < side_class.length; i++) {
        side_class[i].style.display = "block";
    }
    for (let i = 0; i < drink_class.length; i++) {
        drink_class[i].style.display = "block";
    }
    for (let i = 0; i < pizza_class.length; i++) {
        pizza_class[i].style.display = "block";
    }
}
hide_nothing.addEventListener("click", function () {
    show_all();
})
only_pizzas.addEventListener("click", function () {
    show_all();
    hide_drinks();
    hide_extra();
    hide_sides();
})
only_sides.addEventListener("click", function () {
    show_all();
    hide_pizzas();
    hide_drinks();
    hide_extra();
})
only_drinks.addEventListener("click", function () {
    show_all();
    hide_pizzas();
    hide_extra();
    hide_sides();

})
only_extras.addEventListener("click", function () {
    show_all();
    hide_pizzas();
    hide_sides();
    hide_drinks();
})
show_all();
let addToCartBtn = document.getElementsByClassName("addToCartBtn");
let product_name = document.getElementsByClassName("card-title");
let price = document.getElementsByClassName("store-item-price");
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('inCart');

console.log("indexjs")
cartInfo.addEventListener('click', function () {
    console.log("indexjs")
    cart.classList.toggle('show-cart');
    show_cart();
})

function add_to_cart(product_number) {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }

    let myProduct = {
        name: product_name[product_number - 1].innerHTML,
        price: price[product_number - 1].innerHTML
    };
    cartObj.push(myProduct)
    localStorage.setItem('cart', JSON.stringify(cartObj));
    console.log(localStorage);
    show_cart();
    checkout();
}

function checkout() {
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    let bill = 0;
    for (let i = 0; i < cartObj.length; i++) {
        bill += parseInt(cartObj[i].price);
    }
    console.log(bill);
}
$('.alert-success').hide();

function show_cart() {
    let in_cart = document.getElementById("items");
    in_cart.innerHTML = ``;

    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    let bill = 0;
    for (let i = 0; i < cartObj.length; i++) {
        bill += parseInt(cartObj[i].price);
        in_cart.innerHTML += `<div class="item-text">        
        <p id="cart-item-title" class="font-weight-bold mb-0">${cartObj[i].name}</p>
        <span>Rs.</span>
        <span id="cart-item-price" class="cart-item-price" class="mb-0">${cartObj[i].price}</span>
        <a id='cart-item-remove${i}' onclick="delete_item_from_cart(${i})" class="cart-item-remove mx-3">
        <i class="fas fa-trash"></i>
        </div>
        </a>`
    }
    let total_price = document.getElementById("cart-total");
    total_price.innerHTML = ` <h5>total<sub>(inc. all taxes)</sub></h5>
    <h5> Rs. <strong id="cart-total" class="font-weight-bold">${bill}</strong> </h5>`
    document.getElementById("item-total").innerHTML = bill;
    document.getElementById("item-count").innerHTML = cartObj.length;
}

let clear_cart = document.getElementById("clear-cart");
clear_cart.addEventListener("click", function () {
    localStorage.clear()
    show_cart();
})

function delete_item_from_cart(i) {
    console.log("delete " + i);
    let cart = localStorage.getItem("cart");
    if (cart == null) {
        cartObj = [];
    }
    else {
        cartObj = JSON.parse(cart);
    }
    cartObj.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartObj))
    show_cart();
}
