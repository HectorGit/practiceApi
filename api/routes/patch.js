const express = require("express");
const patchrouter = express.Router();

const query = require(".././tools/queryDatabase");
const qStrings = require(".././tools/sqlStrings");
const val = require(".././tools/validate");
const dbFail = require(".././tools/dbFailSafe");

const MyController = require('../controllers/myController');

patchrouter.route('/patch_example', async(req,res)=>{
    MyController.updateFriend
});

module.exports = patchrouter;