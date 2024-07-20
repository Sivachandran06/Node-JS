// const pizaShop = require("./5.1EventEmmiterBurgurShop");

// const PizzaShop= new pizaShop();

// PizzaShop.on("newOrder",(orderNumber, size, topping)=>{
//     console.log("ORDER RECIVED", orderNumber,size,topping);
//     //supervizer message
//     //shop owneer Message
//     //city owner Message
//     //india supervizer message
// });

// PizzaShop.order("Small", "onion Caps");
// PizzaShop.order("Medium", "mashroom");

// PizzaShop.order("Large", "cheesBust");

const pizaShop = require("./5.1EventEmmiterBurgurShop");
const pizzaShop = new pizaShop();
pizzaShop.on("neworder",(ordernumber, size,topping)=>{
    console.log("new Order" ,ordernumber, size, topping);
});
pizzaShop.order("small","onion");
pizzaShop.order("small","onion");
pizzaShop.order("small","onion");
pizzaShop.order("small","onion");