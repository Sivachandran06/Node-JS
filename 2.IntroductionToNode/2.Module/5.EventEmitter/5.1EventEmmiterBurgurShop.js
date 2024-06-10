
const EventEmiter = require("events");

class pizaShop extends EventEmiter {

    #orderNumber=0;

    order(size, toppping){
    this.#orderNumber ++;

        this.emit("newOrder", this.#orderNumber,size,toppping);
    }
    displayOrder(){
        console.log('orderNumber:',this.#orderNumber,size,toppping);
    }
}
module.exports=pizaShop;