import {v4 as uuidv4 } from 'uuid';

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

    /* - itemElement() - this will return an HTML Div Element.  This element will be something like a card that represents all the information about one item.  It will show the Items Name, Description and Price, and have an add to cart button. add the Eventlistener for addToCart here  */
    itemElement(): HTMLDivElement {
        let itemDiv = document.createElement('div');
        itemDiv.id = this._id;
        let itemName = document.createElement('p');
        itemName.innerText = this._name;
        let itemDescription = document.createElement('p');
        itemDescription.innerText = this._description;
        let itemPrice = document.createElement('p');
        itemPrice.innerText = `$${this._price}`;
        let addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.id = `addToCart-${this._id}`;
        addToCartButton.addEventListener('click', () => {
            if (Shop.myUser) {
                Shop.myUser.addToCart(this);
                Shop.myUser.printCart();
            }
        });
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);
        itemDiv.appendChild(addToCartButton);
        return itemDiv;
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

    /*- printCart
    - this method will take a user and console log the items in the users cart*/
    printCart(): void {
        console.log(`${this.name}'s cart:`)
        for (let item of this._cart) {
            console.log(item.name)
        }
        console.log(`The total cost of ${this.name}'s cart is $${this.cartTotal()}.`)
    }

    /* static loginInUser() : Create a Static function that will retrieve the infomation from the HTML input field for nameand age. The function should return a new User created with the name and age, if a new and age was provided otherwise it can return null or undefined.  Note: This method is static because it doesn't need to work with a User instance.  And to call this static method somewhere else in code it would look like User.createUser() */
    static loginUser(): User | undefined {
        let name = (<HTMLInputElement>document.getElementById('name')).value;
        let age = parseInt((<HTMLInputElement>document.getElementById('age')).value);
        if (name && age) {
            return new User(name, age);
        } else {
            console.log('undefined');
        }
    }

    /*  - cartHTMLElement() : This will return an HTML Div Element.  This function will loop over your cart and create some HTML Code to layout your cart items in a formatted way to have the Name, Quantity and price of each item shown.  You will also create a button to Remove All or Remove Just One of these items from the cart. The event listenering for these buttons will be created ina  different function. Remember: You'll need to devise a way that each add and remove element is tied to a particular item (an easy way to do this is give every button an id based off the items UUIID and precede/follow the UUID with a tag that says whether the button is a remove one or remove all button)*/
    cartHTMLElement(): HTMLDivElement {
        let cartDiv = document.createElement('div');
        cartDiv.id = 'cart';
        for (let item of this._cart) {
            let itemDiv = document.createElement('div');
            itemDiv.id = item.id;
            let itemName = document.createElement('p');
            itemName.innerText = item.name;
            let removeButton = document.createElement('button');
            removeButton.innerText = 'Remove All';
            removeButton.id = `removeAll-${item.id}`;
            let removeOneButton = document.createElement('button');
            removeOneButton.innerText = 'Remove One';
            removeOneButton.id = `removeOne-${item.id}`;
            itemDiv.appendChild(itemName);
            itemDiv.appendChild(removeButton);
            itemDiv.appendChild(removeOneButton);
            cartDiv.appendChild(itemDiv);
        }
        return cartDiv;
    }

    /* -addRemoveEventListeners() - This function adds event listeners to your cart's Remove One/Remove All Buttons.  They will use the previously build removeQuantityFromCart and removeFromCart functions built in the prev. nights homework. */
    addRemoveEventListeners(): void {
        let cartDiv = document.getElementById('cart');
        if (cartDiv) {
            for (let item of this._cart) {
                let removeButton = document.getElementById(`removeAll-${item.id}`);
                let removeOneButton = document.getElementById(`removeOne-${item.id}`);
                if (removeButton) {
                    removeButton.addEventListener('click', () => {
                        this.removeFromCart(item);
                        cartDiv.innerHTML = '';
                        cartDiv.appendChild(this.cartHTMLElement());
                        this.addRemoveEventListeners();
                    });
                }
                if (removeOneButton) {
                    removeOneButton.addEventListener('click', () => {
                        this.removeQuantityFromCart(item, 1);
                        cartDiv.innerHTML = '';
                        cartDiv.appendChild(this.cartHTMLElement());
                        this.addRemoveEventListeners();
                    });
                }
            }
        }
    }

}

/*- Create a class to describe a Shop
    - Be sure to encapsulate your class using private attributes with public getters/setters
    - items as an array of Items (This will hold all the items for sale in the shop)
*/

class Shop {
    static myUser: User | undefined;
    public get items(): Item[] {
    return this._items;
    }
    public set items(value: Item[]) {
    this._items = value;
    }

    /*  showItems() - This method will loop over all the shop items and add each items itemElement to the shop div of the HTML */
    showItems(): void {
        let shopDiv = document.getElementById('shop');
        if (shopDiv) {
            for (let item of this._items) {
                shopDiv.appendChild(item.itemElement());
            }
        }
    }

    /* updateCart() - This method will create the cart contents and display them to the cart div in the HTML.  If the Cart is empty it should say the cart is empty, if the cart contains Items it will list all the cart items using the cartHTMLElement method and the addRemoveEventListeners function. */
    updateCart(): void {
        const cartDiv = document.getElementById('cart') as HTMLElement;
        if (Shop.myUser && Shop.myUser.cart.length === 0) {
            cartDiv.innerText = 'Your cart is empty.';
        } else if (Shop.myUser) {
            cartDiv.innerHTML = '';
            cartDiv.appendChild(Shop.myUser.cartHTMLElement());
            Shop.myUser.addRemoveEventListeners();
        }
    }

    // static myUser property. This property will be either undefined (before the user "logins" or an actual User Object)  This will represent the person shopping at our store
    // static myUser: User | undefined;
    // static loginUser(event) - This will be a static function.  This will be attached to our "login/create user" button to be ran when the user logs in.  This method should create a user and save it to the myUser static property. If that user was created successfully it should then create the shop and cart elements on the page.
    static loginUser(event: Event): void {
        event.preventDefault();
        Shop.myUser = User.loginUser();
        if (Shop.myUser) {
            let shop = new Shop([]); // Pass an empty array as the argument to the Shop constructor
            shop.showItems();
            shop.updateCart(); // Remove the argument from the updateCart method call
        }
    }
    // constructor() - This should now create SIX (6) items for your shop to sell.  It will also build out the shop div using the showItems() method, it will build out the cart section using the updateCart method.
    constructor(
        private _items: Item[]
    ) {
        this._items = [];
        this._items.push(new Item("Quinoa", 25.00, 'Organic white quinoa, unwashed'));
        this._items.push(new Item("Monstera Leaf Plant", 10.00, 'A beautiful, large leafed house plant'));
        this._items.push(new Item("Cork Yoga Mat", 45.00, 'A comfortable, lightweight, all-natural yoga mat'));
        this._items.push(new Item("Ceramic Coffee Mug", 15.00, 'A handcrafted ceramic coffee mug'));
        this._items.push(new Item("Cotton Throw Blanket", 20.00, 'A soft, cozy cotton throw blanket'));
        this._items.push(new Item("Soy Candle", 12.00, 'A hand-poured soy candle'));
        this.showItems();
        this.updateCart();
    }
}

// - User Class Methods:
/* - addToCart
    - this method will bring an object of Item Type and it will add the item to the users cart */

function addToCart(user: User, item: Item):void{
    user.cart.push(item);
    console.log(`${item.name} has been added to ${user.name}'s cart.`)
}

/*## Driver Code
    - We will need a little bit of code to run on page load. We can do this simply by writing this code outside of our classes and functions.  Thi code will add the loginUser method to the login/create user Button*/

document.getElementById('login')?.addEventListener('click', Shop.loginUser);
