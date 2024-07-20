const { error } = require("node:console");
const fs = require("node:fs");
const { connected } = require("node:process");

//------------------ASYNC VERSION CURD OPERATOR-------------


//------------CREAT a FILE---------------

    /* fs.appendFile("./fileSystem/fileSystem.txt",
        "hellow i am from node Create file",

        (error)=>{
        if(error){
            console.log("error ");
        }
        
    }); */

//------------READ a FILE---------------

/* fs.readFile("./fileSystem/fileSystem.txt",
        (error,data)=>{
            if(error){
                console.log("error While reading");
            }else{
                console.log(data);
                console.log(data.toString());
            }

    }) */

//------------UPDATE a FILE---------------

/*       fs.appendFile("./fileSystem/fileSystem.txt" , 
            "\n Hellow iam the new line created by node",
            (error)=>{
                if(error){
                console.log("error to updating/editing file");
                }
        });*/

//------------DELETE a FILE---------------
/*   fs.unlink("./fileSystem/fileSystem.txt", 
    (error)=>{
        if(error){
            console.log(error,"this File facing error to delete");
        }
    }); */


//------------RENAME a FILE---------------

/*fs.rename("./fileSystem/fileSystem.txt", 
    "./fileSystem/file.txt", 
    (error)=>{
        if(error){
            console.log(error, " facing error on rename the file");
        }
    }
);*/

