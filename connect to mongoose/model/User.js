const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    bio:{
        type:String
    },
    email:{
        type:String
    }
})
const User=mongoose.model('users',userSchema)
module.exports=User
