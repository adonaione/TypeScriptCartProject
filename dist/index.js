"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");

class Item {
    constructor(name, price, description) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._price = price;
        this._description = description;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
}
/* - Create a class to describe a User
    - Be sure to encapsulate your class using private attributes with public getters/setters
    - id as a string defaulted to a UUID
    - name as a string
    - age as an integer
    - cart as an array of Items */
class User {
    constructor(name, age) {
        this._id = (0, uuid_1.v4)();
        this._name = name;
        this._age = age;
        this._cart = [];
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    // - User Class Methods:
    /* - addToCart
        - this method will bring an object of Item Type and it will add the item to the users cart */
    addToCart(item) {
        this._cart.push(item);
        console.log(`${item.name} has been added to ${this.name}'s cart.`);
    }
    /* - removeFromCart
    - this method will bring an object of Item Type and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left) */
    removeFromCart(item) {
        this._cart = this._cart.filter(cartItem => cartItem.id !== item.id);
        console.log(`All ${item.name}'s have been removed from ${this.name}'s cart.`);
    }
    /*- removeQuantityFromCart
    - this method will bring an object of Item Type and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass in the red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart) */
    removeQuantityFromCart(item, quantity) {
        for (let i = 0; i < quantity; i++) {
            let indexofItem = this._cart.findIndex(cartItem => cartItem.id === item.id);
            this._cart.splice(indexofItem, 1);
            console.log(`${quantity} ${item.name}'s have been removed from ${this.name}'s cart.`);
        }
    }
    /* - cartTotal
        - this method will calculate the total price of all items in our cart and RETURNS that value*/
    cartTotal() {
        let total = 0;
        for (let i = 0; i < this._cart.length; i++) {
            total = total + this._cart[i].price;
        }
        return total;
    }
    /*- printCart
    - this method will take a user and console log the items in the users cart*/
    printCart() {
        console.log(`${this.name}'s cart:`);
        for (let item of this._cart) {
            console.log(item.name);
        }
        console.log(`The total cost of ${this.name}'s cart is $${this.cartTotal()}.`);
    }
}
/*- Create a class to describe a Shop
    - Be sure to encapsulate your class using private attributes with public getters/setters
    - items as an array of Items (This will hold all the items for sale in the shop)
*/
class Shop {
    // constructor() {
    //     this._items = [];
    // }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
    /*- constructor
        - The constructor will create three (3) Items and add them to the list of items in the shop */
    constructor() {
        this._items = [];
        this._items.push(new Item('Quinoa', 25.00, 'Organic white quinoa, unwashed'));
        this._items.push(new Item('Monstera Leaf Plant', 10.00, 'A beautiful, large leafed house plant'));
        this._items.push(new Item('Cork Yoga Mat', 45.00, 'A comfortable, lightweight, all-natural yoga mat'));
    }
}
// - User Class Methods:
/* - addToCart
    - this method will bring an object of Item Type and it will add the item to the users cart */
function addToCart(user, item) {
    user.cart.push(item);
    console.log(`${item.name} has been added to ${user.name}'s cart.`);
}
/*Create Driver Code to emulate a front end user
- use the functions created to accomplish these tasks in order
- Create a Shop
- Create a User
- Create some code to add items from the shop to the users cart, print the cart and remove all of a singular item from the cart and remove a quantity from a cart.
- Verify all functions work as expected, if they don't figure out why not and fix your functions.*/
// Create a Shop
let shop = new Shop();
//Create a User
let customer = new User('Adonai', 26);
// Create some code to add items from the shop to the users cart, print the cart and remove all of a singular item from the cart and remove a quantity from a cart.
addToCart(customer, shop.items[0]);
addToCart(customer, shop.items[1]);
addToCart(customer, shop.items[1]);
addToCart(customer, shop.items[1]);
addToCart(customer, shop.items[2]);
addToCart(customer, shop.items[2]);
addToCart(customer, shop.items[2]);
customer.printCart();
customer.removeFromCart(shop.items[1]);
customer.printCart();
customer.removeQuantityFromCart(shop.items[2], 2);
customer.printCart();
