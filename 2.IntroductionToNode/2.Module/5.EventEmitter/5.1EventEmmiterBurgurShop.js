
// const EventEmiter = require("events");

// class pizaShop extends EventEmiter {

//     #orderNumber=0;

//     order(size, toppping){
//     this.#orderNumber ++;

//         this.emit("newOrder", this.#orderNumber,size,toppping);
//     }
//     displayOrder(){
//         console.log('orderNumber:',this.#orderNumber,size,toppping);
//     }
// }
// module.exports=pizaShop;
const EventEmiter = require("events");

class pizaShop extends EventEmiter{
    #ordernumber = 0;

    order(size, topping){
        this.#ordernumber++;
        this.emit("neworder",this.#ordernumber, size, topping);
    }
}
module.exports=pizaShop;
