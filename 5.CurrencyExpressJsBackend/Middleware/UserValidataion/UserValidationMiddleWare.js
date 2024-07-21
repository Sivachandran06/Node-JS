const { creatUserSchema } = require("../Joi/JoiSchema");

function validateUserCreationMiddleWare (req,res,next){
const {error} = creatUserSchema.validate(req.body);
if(error){
    res.status(400).json({
        error,
    });
}else{
    next();
}
}

module.exports = {validateUserCreationMiddleWare};