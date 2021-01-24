const express = require("express");
const deleterouter = express.Router();

const query = require(".././tools/queryDatabase");
const qStrings = require(".././tools/sqlStrings");
const val = require(".././tools/validate");
const dbFail = require(".././tools/dbFailSafe");

const MyController = require('../controllers/myController');

deleterouter.route('/delete_example', async(req,res)=>{
    MyController.deleteFriend
});

module.exports = deleterouter;