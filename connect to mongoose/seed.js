const User = require("./model/User")

let dummydata=[
    {
        name:"sachin",
        bio:"belive in karma ",
        email:"gadariya9990@gmail.com"    
    },
    {
        name:"monika",
        bio:"hardwrok is the key of success",
        email:"monika9540@gmail.com"
    },
    {
        name:"vishal",
        bio:"belive in yourself",
        email:"vishal888@gmail.com"
    }
] 

async function seedDb(){
   await User.insertMany(dummydata);
   console.log("data seeded");
}
module.exports=seedDb