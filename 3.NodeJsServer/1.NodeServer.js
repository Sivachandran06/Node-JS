
const http = require("node:http");

const server = http.createServer((req, res)=>{
    console.log("Server is up to running We can't get responce");

    const url = req.url;
    const method = req.method;

    if(url === "/"){
        if(method === "GET"){
            res.end("Welcome to the Home Page");
        }else{
            res.statusCode = 404;
            res.end("Bad req");
        }
        
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


// const http = require("node:http");

// const server = http.createServer((req,res)=>{
//     console.log("server is get responce");

//     const url =req.url;

//     if(url === "/"){
//         res.end("welome to home page");
//     }else if(url === "/fitness"){
//         res.end("what is you goal");
//     }else if (url === "/faq"){
//         res.write('how to join');
//         res.write("\nwhat is prize");
//         res.end("\nthankq");
//     }else{
//         res.end("there is no page like this ");
//     }


// });
// server.listen(8083,()=>{
//     console.log('server is running free', 8083);
// })

