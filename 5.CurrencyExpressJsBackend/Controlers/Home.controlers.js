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

module.exports = {getHome, getDetails};