var mongoose = require('mongoose');

//SCHEMA OF YOGA FORM
var userSchema  = new mongoose.Schema(
{
    name : {
       type : String,
       required: true,
       maxlength: 32,
       trim: true

       },

        lastname : {
           type : String,
             required: true,
             maxlength: 32,
              trim: true
         },

       email : {

             type: String,
             trim : true,
             required: true,
             unique : true
               },



       phone : {
              type :Number,
              required: true,
               unique : true

               },

       age : {
               type : Number,
                
                required : true
              },

      gender: {
             type : String,
             required : true
              },



      schedule:{
             type: String,
             required : true
        },

       level: {
             type: String
              },

        Package:{
               type: Number
              },

         payment: {
              type: String
             }
});
module.exports = mongoose.model("User",userSchema)