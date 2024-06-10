const eventEmiter = require("node:events");

const emiter = new eventEmiter ();

emiter.on("attention", (data)=>{
    console.log("Okey its attention position", data);
});

emiter.emit("attention", 99);