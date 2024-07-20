// activity 1
// console.log("a");
// process.nextTick(()=>{ console.log("This is process 1")});
// console.log("b");

// activity 2
// console.log("a");
// process.nextTick(()=>{ console.log("This is process 1")});
// process.nextTick(()=>{ console.log("This is process 2")});
// console.log("b");

//activity 3

    // console.log("a");
    // process.nextTick(()=>{ 
    //     console.log("This is process 1")
    //     process.nextTick(()=>{ 
    //         console.log("This is process 1 Inside the process 1")});
    // });
    // process.nextTick(()=>{ 
    //     console.log("This is process 2")});
    // console.log("b");

// activity 4
// console.log("a");

// process.nextTick(()=>{ console.log("This is process 1")});

// Promise.resolve().then(data =>{
//     console.log("This is promise 1");
// });

// console.log("b");

// activity 5

// console.log("a");
//     process.nextTick(()=>{ 
//         console.log("This is process 1")
        
//         Promise.resolve().then(data =>{
//                 console.log("This is promise 1");
//             });
//     });
//     process.nextTick(()=>{ 
//         console.log("This is process 2")});
//     console.log("b");

    /*
    a
    b
    This is process 1
    This is process 2
    This is promise 1
    */

// activity 6

// console.log("a");
// setTimeout(()=>{ console.log("setTimeout 1")});
// setTimeout(()=>{ console.log("setTimeout 2")});
// setTimeout(()=>{ console.log("setTimeout 3")});

// process.nextTick(()=>{ console.log("This is process 1")});
// process.nextTick(()=>{ console.log("This is process 2")});
// process.nextTick(()=>{ console.log("This is process 3")
//     process.nextTick(()=>{console.log("This is process 3 inside process 3.1")});
// });

// console.log("b");

// activity 7

// console.log("a");
// setTimeout(()=>{ console.log("setTimeout 1")
//     process.nextTick(()=>{ console.log("This is setimeout inside process next 1.1")});
// });
// setTimeout(()=>{ console.log("setTimeout 2")});
// process.nextTick(()=>{ console.log("This is process 2")});
// console.log("b");

/*
a
b
This is process 2
setTimeout 1
This is setimeout inside process next 1.1
setTimeout 2 
*/

// activity 8 

// const { error } = require("node:console");
// const fs = require("node:fs");

// console.log("a");

// fs.readFile("./fileSystem/file.txt", (error, data)=>{
//     console.log("this is FileSystem 1");
// });
// setTimeout(()=>{
//     console.log("Settime out");
// });
// console.log("b");

/*
a
b
Settime out
this is FileSystem 1 
*/