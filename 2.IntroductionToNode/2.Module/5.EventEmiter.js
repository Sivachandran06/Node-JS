const EventEmiter = require("node:events");


const emiiter = new EventEmiter();

emiiter.on("attansion",(data)=>{
    console.log("yes attaion is emmiting", data);
})

emiiter.emit('attansion',2020);
