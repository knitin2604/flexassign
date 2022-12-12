
const User = require("../models/user.js");
const {check,validationResult} = require('express-validator');

  //CONTROLLERS

         exports.signup = (req,res) => {
  
  //Validation Checking
            const errors = validationResult(req)        
               if(!errors.isEmpty()){
              return res.status(422).json({
               error: errors.array()[0].msg
                 });
            }

  //SAVING USER INFO INTO DATABASE
       var user = new User(req.body);                 
            user.save((err,user) => {
             if(err) {
             return res.status(400).json({
             err : "Not able tO register You"
           });
          }
         res.json({
            name: user.name,
           lastname: user.lastname,
            email: user.email,
            phone: user.phone,
            age: user.age,
            gender: user.gender,
            schedule: user.schedule,
            level: user.level,
            Package: user.Package,
            payment: user.payment  
         });
      });
     };

