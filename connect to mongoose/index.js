const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pages');
const seedDb = require('./seed');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/thingsToLearn')
    .then(() => { console.log("DB connected") })
    .catch((err) => { console.log(err) })
// seedDb()



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(pageRoute)

app.listen(8080, (req, res) => {
    console.log('server connected at port:8080')
})