"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
// create function createUser
function createUser(name, age) {
    const newUser = {
        id: (0, uuid_1.v4)(),
        name,
        age,
        cart: []
    };
    return newUser;
}
// create function createItem
function createItem(name, price, description) {
    const newItem = {
        id: (0, uuid_1.v4)(),
        name,
        price,
        description
    };
    return newItem;
}
// create function addToCart
function addToCart(user, item) {
    user.cart.push(item);
    console.log(`${item.name} has been added to ${user.name}'s cart.`);
}
// create function removeFromCart
function removeFromCart(user, item) {
    user.cart = user.cart.filter(cartItem => cartItem.id !== item.id);
    console.log(`All ${item.name}'s have been removed from ${user.name}'s cart.`);
}
// create function removeQuantityFromCart
function removeQuantityFromCart(user, item, quantity) {
    for (let i = 0; i < quantity; i++) {
        let indexofItem = user.cart.findIndex(cartItem => cartItem.id === item.id);
        user.cart.splice(indexofItem, 1);
    }
    console.log(`${quantity} ${item.name}'s have been removed from ${user.name}'s cart.`);
}
// create function cartTotal
function cartTotal(user) {
    let total = 0;
    for (let i = 0; i < user.cart.length; i++) {
        total = total + user.cart[i].price;
    }
    return total;
}
// create function printCart
function printCart(user) {
    console.log(`${user.name}'s cart:`);
    for (let item of user.cart) {
        console.log(item.name);
    }
    console.log(`The total cost of ${user.name}'s cart is $${cartTotal(user)}.`);
}
let customer1 = createUser('Adonai', 26);
let quinoa = createItem('Quinoa', 25.00, 'Organic white quinoa, unwashed');
let housePlant = createItem('Monstera Leaf Plant', 10.00, 'A beautiful, large leafed house plant');
let yogaMat = createItem('Cork Yoga Mat', 45.00, 'A comfortable, lightweight, all-natural yoga mat');
addToCart(customer1, quinoa);
printCart(customer1);
addToCart(customer1, housePlant);
addToCart(customer1, housePlant);
addToCart(customer1, housePlant);
printCart(customer1);
addToCart(customer1, yogaMat);
addToCart(customer1, yogaMat);
addToCart(customer1, yogaMat);
printCart(customer1);
removeFromCart(customer1, housePlant);
printCart(customer1);
removeQuantityFromCart(customer1, yogaMat, 2);
printCart(customer1);
