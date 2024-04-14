import {v4 as uuidv4 } from 'uuid';

// Create a Type to describe a Item
type Item = {
    readonly id: string;
    name: string;
    price: number;
    description: string;
}

// Create a Type to describe a User
type User = {
    readonly id: string;
    name: string;
    age: number;
    cart: Item[];
}

// create function createUser
function createUser(name: string, age: number): User {
    const newUser:User = {
        id: uuidv4(),
        name,
        age,
        cart: []
    }
    return newUser;
}

// create function createItem
function createItem(name: string, price: number, description: string): Item {
    const newItem:Item = {
        id: uuidv4(),
        name,
        price,
        description
    }
    return newItem;
}

// create function addToCart
function addToCart(user: User, item: Item):void{
    user.cart.push(item);
    console.log(`${item.name} has been added to ${user.name}'s cart.`)
}

// create function removeFromCart
function removeFromCart(user: User, item: Item):void{
    user.cart = user.cart.filter( cartItem => cartItem.id !== item.id);
    console.log(`All ${item.name}'s have been removed from ${user.name}'s cart.`)
}

// create function removeQuantityFromCart
function removeQuantityFromCart(user: User, item: Item, quantity: number):void{
    for (let i=0; i < quantity; i++) {
        let indexofItem = user.cart.findIndex(cartItem => cartItem.id === item.id);
        user.cart.splice(indexofItem, 1);
        }
        console.log(`${quantity} ${item.name}'s have been removed from ${user.name}'s cart.`)
}  

// create function cartTotal
function cartTotal(user: User):number{
    let total = 0;
    for (let i=0; i < user.cart.length; i++) {
        total = total + user.cart[i].price;
    }
    return total;
    
}

// create function printCart
function printCart(user: User):void{
    console.log(`${user.name}'s cart:`)
    for (let item of user.cart) {
        console.log(item.name)
    }
    console.log(`The total cost of ${user.name}'s cart is $${cartTotal(user)}.`)
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




