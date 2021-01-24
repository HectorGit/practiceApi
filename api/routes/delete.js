const myController = require("../controllers/myController");

let MyController = "../controllers/myController" 

app.route('/delete_example', async(req,res)=>{
    MyController.deleteFunction
});