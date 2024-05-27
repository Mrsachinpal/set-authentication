const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    
    },
    id:{
        type:Number,
       
    },
    password:{
        type:String,
        required:true
    },
    joinDate:{
        type:Date,
    }
})
const User=mongoose.model('users',userSchema)
module.exports=User