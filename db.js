const mongoose =require('mongoose');
const { Schema } = require('zod');
mongoose.connect('mongodb+srv://admin:Akshat%402022@cluster0.ctb8swf.mongodb.net/paytm');
//creating schema for user

const userSchema = new mongoose.Schema({
 

            username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3,
        maxlenght:10,
        lowercase:true

            },
            password:{
                type:String,
                required:true,
                minLength:8
            },
          firstName:{
            type:String,
            required:true
          } ,
          lastName:{
            type:String,
            required:true
          }   
        });


//account schema 
const accountSchema = new mongoose.Schema({

userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref:'User',
  required:true
},

balance: {
  type:Number,
  required:true
}


});



        //exporting the userSchema

        const User = mongoose.model('User',userSchema);
        const Account = mongoose.model('Account',accountSchema)

        module.exports={
            User,
            Account
        };


