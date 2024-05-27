const mongoose=require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    phone:{
        type:Number,
        trim:true,
        require:true
    },
    email:{
        type:String,
        trim:true,
        require:true
    }
    
})
 userSchema.plugin(passportLocalMongoose);

const User=mongoose.model('users',userSchema)
module.exports=User