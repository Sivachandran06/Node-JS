
const http = require("node:http");

const server = http.createServer((req, res)=>{
    console.log("Server is up to running We can't get responce");

    const url = req.url;
    
    if(url === "/"){
        res.end("Welcome to the Home Page");
    }else if (url === "/fitness"){
        res.end("finess Gole");
    }else if (url === "/about") {
        res.write("Mail:good@gamil.com");
        res.write("\ncontct: 1234567890");
        res.end("\nfeel free to ask ");
    }else {
        res.end("No page Like this ERROR");
    }
});

server.listen(8082,()=>{
    console.log("server is running free" ,8082);
});
