const express=require('express');
const app= express();
const path=require('path');
const pageRoute=require('./routes/pages');

app.set('view engine','ejs');       //set view engine 
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));







app.use(pageRoute);

app.listen(8080,(req,res)=>{
    console.log('server is connected at port: 8080')
})