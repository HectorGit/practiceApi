
const express = require("express");
const getrouter = express.Router();

const query = require(".././tools/queryDatabase");
const qStrings = require(".././tools/sqlStrings");
const val = require(".././tools/validate");
const dbFail = require(".././tools/dbFailSafe");

const MyController = require('../controllers/myController');
//let MyController = "../controllers/myController" 

getrouter.route('/get_example', async(req,res)=>{
    MyController.readFriend
});


module.exports = getrouter;