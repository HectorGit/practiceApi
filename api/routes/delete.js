const myController = require("../controllers/myController");
const query = require(".././tools/queryDatabase");
const qStrings = require(".././tools/sqlStrings");
const val = require(".././tools/validate");
const dbFail = require(".././tools/dbFailSafe");

const MyController = require('../controllers/myController');

app.route('/delete_example', async(req,res)=>{
    MyController.deleteFunction
});