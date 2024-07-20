const { error } = require("node:console");

const fsPromiss = require("node:fs").promises;

/*   fsPromiss.readFile("./fileSystem/file.txt").then((data)=>{
        console.log(data.toString(),"dataaa");
        }).catch(error =>{
        console.log(error);
     }); */

     /*async function readFile(){
        try{
            const data = await fsPromiss.readFile("./fileSystem/file.txt");
            console.log(data.toString());

        }catch{
            console.log(error);
        }
     }
     readFile();*/
