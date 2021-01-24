
const express = require("express");
const getrouter = express.Router();

const query = require(".././tools/queryDatabase");
const qStrings = require(".././tools/sqlStrings");
const val = require(".././tools/validate");
const dbFail = require(".././tools/dbFailSafe");

const MyController = require('../controllers/myController');
//let MyController = "../controllers/myController" 

getrouter.get("/", (req, res) => {
    return res.send("Welcome to Hector\'s Practice API! 🌝");

});

//careful here ! i had getrouter.route so it didn't work !
getrouter.get("/read_friend", async(req,res)=>{
    MyController.readFriend
});


module.exports = getrouter;