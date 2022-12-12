var express = require("express");
var router = express.Router();
const {check,validationResult} = require('express-validator');
const {signup} = require("../controllers/auth.js")

//Validation On Inputs

router.post("/signup",[
     check("name").isLength({min: 3}),
     check("lastname").isLength({min: 3}),
     check("email").isEmail()
     
],signup); 

module.exports = router;
 