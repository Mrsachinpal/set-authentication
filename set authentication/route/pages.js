const express = require('express');
const User = require('../model/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (e) {
        console.log(e)
    }

})

module.exports = router 