const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const methodOverride=require('method-override')
const pageRoute=require('./route/pages');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/thingsToLearn')
    .then(() => { console.log("DB connected") })
    .catch((err) => { console.log(err) })

app.set('view engine','ejs');       
app.set('views',path.join(__dirname,'views'));      // static path for views
app.use(express.static(path.join(__dirname,'views')));      //static path for public
app.use(methodOverride('_method'));     //method override
app.use(express.urlencoded({ extended: true }))

app.use(pageRoute);

app.listen(8080,(req,res)=>{
    console.log('server connected at port: 8080');
})