const pizaShop = require("./5.1EventEmmiterBurgurShop");

const PizzaShop= new pizaShop();

PizzaShop.on("newOrder",(orderNumber, size, topping)=>{
    console.log("ORDER RECIVED", orderNumber,size,topping);
    //supervizer message
    //shop owneer Message
    //city owner Message
    //india supervizer message
});

PizzaShop.order("medium", 10);
PizzaShop.order("medium", mashroom);

PizzaShop.order("medium", "cheesBust");

