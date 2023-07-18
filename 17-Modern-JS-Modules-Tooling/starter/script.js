// importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('cheese', 9);
// console.log(ShoppingCart.totalPrice);

// import add, { totalPrice as price, totalPrice, tq } from './shoppingCart.js';
// console.log(totalPrice);
import add from './shoppingCart.js';
import { cart } from './shoppingCart.js';

add('sticks', 2);
add('tomatoes', 5);
add('apples', 24);

// console.log(cart);
// const result = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await result.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await result.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2.shippingCost);
*/

/*
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

// Import
  const {addToCart} = require('./shoppingCart');
  */

// import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';
import {cloneDeep} from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);
const stateDeepClonse = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClonse);

if (module.hot) {
  module.hot.accept();
}
