const express = require("express");
const server = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const homeRoutes = require("./routes/HomeRoutes");

server.use("/api/v1/home",homeRoutes);

dotenv.config();

//const connectionString = process.env.MONGO_CONNECTION ;
const connectionString = "mongodb://localhost:27017/CurrencyExpressBackEndProject" //  =>this is dangerous
const dataBase = "./CurrencyExpressBackEndProject";
mongoose
.connect(connectionString )
.then(()=>{
    console.log("DB is connected");
})
.catch((e)=>{
    console.log("DB is not Connected !!!", e);
})


server.listen(8080, ()=>{
    console.log("server is Listening on", 8080);
})