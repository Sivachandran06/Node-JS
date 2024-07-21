const UserModule = require("../DataBase/Modules/User.Module");

function getHome (req, res){
    res.json({
        name:"Siva",
        age:"26",
        class:"12th",
    });
}
function getDetails(req, res){
        res.json({
            details:"its Nise"
        }); 
}

//CRUD operator 

async function createUser(req,res){
    const{username, password , email}= req.body;
    try{
        const userObj = new UserModule({
            username:username,
            password:password,
            email:email,
        });
    
        await userObj.save();
    
        res.json({
            message:"User is Creat sucessfully",
        });
    
    }catch (error){
        res.status(500).json({
            message:"Some error occroud "
        });
    }
}

module.exports = {getHome, getDetails,createUser};