
// const http = require("node:http");

// const server = http.createServer((req, res)=>{
//     console.log("Server is up to running We can't get responce");
//     res.end("hellow Guys");
// });

// server.listen(8081,()=>{
//     console.log("server is running free" ,8081);
// });


const http = require("node:http");

const server = http.createServer((req, res)=>{
    console.log("we can ge the responce");
    res.end("hellow guys");
});
server.listen(8080,()=>{
    console.log("server is set free on " , 8080)
});