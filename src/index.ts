import {v4 as uuidv4 } from 'uuid';

//  Create a Type to describe a Item
// type Item = {
//     readonly id: string;
//     name: string;
//     price: number;
//     description: string;
// }

//  Create a Type to describe a User //
// type User = {
//     readonly id: string;
//     name: string;
//     age: number;
//     cart: Item[];
// }

// create function createUser
// function createUser(name: string, age: number): User {
//     const newUser:User = {
//         id: uuidv4(),
//         name,
//         age,
//         cart: []
//     }
//     return newUser;
// }

// create function createItem
// function createItem(name: string, price: number, description: string): Item {
//     const newItem:Item = {
//         id: uuidv4(),
//         name,
//         price,
//         description
//     }
//     return newItem;
// }

// create function addToCart
// function addToCart(user: User, item: Item):void{
//     user.cart.push(item);
//     console.log(`${item.name} has been added to ${user.name}'s cart.`)
// }

// create function removeFromCart
// function removeFromCart(user: User, item: Item):void{
//     user.cart = user.cart.filter( cartItem => cartItem.id !== item.id);
//     console.log(`All ${item.name}'s have been removed from ${user.name}'s cart.`)
// }

// create function removeQuantityFromCart
// function removeQuantityFromCart(user: User, item: Item, quantity: number):void{
//     for (let i=0; i < quantity; i++) {
//         let indexofItem = user.cart.findIndex(cartItem => cartItem.id === item.id);
//         user.cart.splice(indexofItem, 1);
//         }
//         console.log(`${quantity} ${item.name}'s have been removed from ${user.name}'s cart.`)
// }  

// create function cartTotal
// function cartTotal(user: User):number{
//     let total = 0;
//     for (let i=0; i < user.cart.length; i++) {
//         total = total + user.cart[i].price;
//     }
//     return total;
    
// }

// create function printCart
// function printCart(user: User):void{
//     console.log(`${user.name}'s cart:`)
//     for (let item of user.cart) {
//         console.log(item.name)
//     }
//     console.log(`The total cost of ${user.name}'s cart is $${cartTotal(user)}.`)
// }



// let customer1 = createUser('Adonai', 26);

// let quinoa = createItem('Quinoa', 25.00, 'Organic white quinoa, unwashed');

// let housePlant = createItem('Monstera Leaf Plant', 10.00, 'A beautiful, large leafed house plant');

// let yogaMat = createItem('Cork Yoga Mat', 45.00, 'A comfortable, lightweight, all-natural yoga mat');


// addToCart(customer1, quinoa);
// printCart(customer1);

// addToCart(customer1, housePlant);
// addToCart(customer1, housePlant);
// addToCart(customer1, housePlant);
// printCart(customer1);

// addToCart(customer1, yogaMat);
// addToCart(customer1, yogaMat);
// addToCart(customer1, yogaMat);
// printCart(customer1);

// removeFromCart(customer1, housePlant);
// printCart(customer1);

// removeQuantityFromCart(customer1, yogaMat, 2);
// printCart(customer1);




/* - Create a class to describe a Item
   - Be sure to encapsulate your class using private attributes with public getters/setters
   - id as a string defaulted to a UUID
   - name as a string
   - price as an integer
   - description as a string */

class Item {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;
    constructor(name: string, price: number, description: string) {
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._description = description;
    } 

    public get id(): string {
    return this._id;
    }
    public set id(value: string) {
    this._id = value;
    }

    public get name(): string {
    return this._name;
    }
    public set name(value: string) {
    this._name = value;
    }

    public get price(): number {
    return this._price;
    }
    public set price(value: number) {
    this._price = value;
    }

    public get description(): string {
    return this._description;
    }
    public set description(value: string) {
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
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Item[];
    constructor(name: string, age: number) {
        this._id = uuidv4();
        this._name = name;
        this._age = age;
        this._cart = [];
    }

    public get id(): string {
    return this._id;
    }
    public set id(value: string) {
    this._id = value;
    }

    public get name(): string {
    return this._name;
    }
    public set name(value: string) {
    this._name = value;
    }

    public get age(): number {
    return this._age;
    }
    public set age(value: number) {
    this._age = value;
    }

    public get cart(): Item[] {
    return this._cart;
    }
    public set cart(value: Item[]) {
    this._cart = value;
    }

    // - User Class Methods:
/* - addToCart
    - this method will bring an object of Item Type and it will add the item to the users cart */

    addToCart(item: Item): void {
        this._cart.push(item);
        console.log(`${item.name} has been added to ${this.name}'s cart.`)
    }

    /* - removeFromCart
    - this method will bring an object of Item Type and it will remove all the instances of the item to the users cart (so the cart would have zero of these items left) */
    removeFromCart(item: Item): void {
        this._cart = this._cart.filter( cartItem => cartItem.id !== item.id);
        console.log(`All ${item.name}'s have been removed from ${this.name}'s cart.`)
    }

    /*- removeQuantityFromCart
    - this method will bring an object of Item Type and a quantity of the item to remove and it will remove the quantity amount of instances of the item to the users cart (so if the cart had 5 red hats and we pass in the red hat item and the number 3 for the quantitiy we would end up with 2 red hats left in the cart) */
    removeQuantityFromCart(item: Item, quantity: number): void {
        for (let i=0; i < quantity; i++) {
            let indexofItem = this._cart.findIndex(cartItem => cartItem.id === item.id);
            this._cart.splice(indexofItem, 1);
        
        console.log(`${quantity} ${item.name}'s have been removed from ${this.name}'s cart.`)
        }

    /* - cartTotal
        - this method will calculate the total price of all items in our cart and RETURNS that value*/
    cartTotal(): number {
        let total = 0;
        for (let i=0; i < this._cart.length; i++) {
            total = total + this._cart[i].price;
        }
        return total;
    }

}

/*- Create a class to describe a Shop
    - Be sure to encapsulate your class using private attributes with public getters/setters
    - items as an array of Items (This will hold all the items for sale in the shop)
*/

class Shop {
    private _items: Item[];
    constructor() {
        this._items = [];
    }

    public get items(): Item[] {
    return this._items;
    }
    public set items(value: Item[]) {
    this._items = value;
    }
}

// - User Class Methods:
/* - addToCart
    - this method will bring an object of Item Type and it will add the item to the users cart */

function addToCart(user: User, item: Item):void{
    user.cart.push(item);
    console.log(`${item.name} has been added to ${user.name}'s cart.`)
}