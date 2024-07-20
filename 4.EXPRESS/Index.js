const express = require("express");

const Port = 8080;
const Server = express();

Server.use(express.json());

Server.get("/",(req,res)=>{
    res.end("wecome to the home page ");
});
Server.get("/fitness",(req, res)=>{

    const quryParams = req.query;
    console.log(quryParams);

    const {type ="gym"}= quryParams;

    if(type ==="gym") {
        res.end("gym Fitness");
    }else if(type=== "Dance"){
        res.end("Dance Fitness");
    }else{
        res.end("Gendral Fitness");
    }
    
});
Server.get("/product/:id" ,(req,res)=>{
    const id = req.params["id"];

    res.end(`product ID :: ${id}`);
});

Server.post("/about",(req,res)=>{
    res.end("about");
});

Server.post("/register/newuser", (req,res)=>{
    const bodyObj = req.body;
    console.log(bodyObj);
    res.end("Thanks for registration" )
})



Server.listen(Port, ()=>{
    console.log("sever is ready to listen", Port);
});


