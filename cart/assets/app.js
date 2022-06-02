"use strict";

//
const btnShowUser = document.getElementById("btn__login");

// Get user
const getUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];

  console.log(response);
  console.log(data);
  console.log(user);

  showUser(user);
};

// Show user
const showUser = (user) => {
  const username = document.getElementById("username");
  const userFullName = document.getElementById("userfullname");
  const userEmail = document.getElementById("useremail");

  const { email, login, name } = user;

  username.innerText = `${login.username}`;
  userFullName.innerText = `Nombre: ${name.first} ${name.last}`;
  userEmail.innerText = `Correo: ${email}`;
};

//
const productsList = document.querySelector(".products__list");
const cartList = document.querySelector(".cart__list");
const cartInfo = document.querySelector(".cart__info");

let cart = [];

//
const priceFormat = (x = 0) => {
  return Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(x);
};

// Render products
const showProducts = () => {
  console.log("1. Render All Products", products);

  products.forEach((product) => {
    const { id, name, brand, imgSrc, price, inStock } = product;

    productsList.innerHTML += ` 
      <li class="products__item">
        <div class="item__header">
          <img src="${imgSrc}" alt="" />
          <p>${name} ${brand}</p>
          <p>Valor: ${priceFormat(price)}</p>
          <p >Stock: <span id="stock-${id}">${inStock}</span></p>
        </div>

        <div class="item__footer">
          <p>
            Va a comprar: <span class="product_quantity" id="product-${id}">0</span>
          </p>

          <div class="counter">
            <button id="btn__counter-add" onclick="changeNumberOfUnits('plus', ${id})">+</button>
            <button id="btn__counter-sub" onclick="changeNumberOfUnits('minus', ${id})">-</button>
          </div>

          <button class="btn__add-to-cart" id="add-to-cart" onclick="addToCart(${id})">
            Añadir al carrito
          </button>
        </div>
      </li>`;
  });
};

showProducts();

// Add to cart
const addToCart = (id) => {
  console.log("2. Funct Event Add to Cart Product ID", id);

  // Check if product already exist in cart
  let itemCheck = cart.some((item) => item.id === id);

  if (itemCheck) {
    // alert("El Producto ya se encuentra en el carro");
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({ ...item, numberOfUnits: 0 });

    console.log("3. Funct Event Add to Cart find product by ID", item);
    console.log("4. Producto añadido al array ", cart);
  }

  changeNumberOfUnits("plus", id);

  updateCart();
};

// Update cart
const updateCart = () => {
  showCartItems();

  showSubtotal();
};

// Render cart
const showCartItems = () => {
  // Clear cart element
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const { numberOfUnits, name, brand, resolution, size, price } = item;

    cartList.innerHTML += `
      <li> 
        ${numberOfUnits} ${name} ${brand} ${resolution} ${size} pulgadas, valor unitario ${priceFormat(
      price
    )}, 
        valor total...
      </li>
    `;
  });
};

//
const removeItemFromCart = (id) => {
  cart = cart.filter((item) => item.id === id);

  console.log("CART", cart);

  updateCart();
};

// Change number of units for an item
const changeNumberOfUnits = (action, id) => {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "plus" && numberOfUnits === item.inStock) {
        alert("Ya no queda más stock");

      } else if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;

        document.getElementById("product-" + item.id).innerHTML = numberOfUnits;
        document.getElementById("stock-" + item.id).innerHTML =
          item.inStock - numberOfUnits;

        console.log("Resta");
        
      } else if (action === "plus" && numberOfUnits < item.inStock) {
        numberOfUnits++;

        document.getElementById("product-" + item.id).innerHTML = numberOfUnits;
        document.getElementById("stock-" + item.id).innerHTML =
          item.inStock - numberOfUnits;

        console.log("Suma");
      }
    }

    return { ...item, numberOfUnits };
  });

  updateCart();
};

//
const showSubtotal = () => {
  let totalPrice = 0;
  //let totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    //totalItems += item.numberOfUnits;
  });

  cartInfo.innerHTML = `<p>Valor total de la compra: ${priceFormat(
    totalPrice
  )}</p>`;
};

//
btnShowUser.addEventListener("click", getUser);
