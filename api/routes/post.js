const express = require("express");
const postrouter = express.Router();

const query = require(".././tools/queryDatabase");
const qStrings = require(".././tools/sqlStrings");
const val = require(".././tools/validate");
const dbFail = require(".././tools/dbFailSafe");

const MyController = require('../controllers/myController');



postrouter.route('/post_example', async(req,res)=>{
    MyController.createFriend
});

module.exports = postrouter;