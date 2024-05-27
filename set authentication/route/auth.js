const express = require("express");
const User = require("../model/User");
const router = express.Router();
const passport = require('passport');

router.get('/register', (req, res) => {
    res.render('./auth/register')
})

router.get('/login', (req, res) => {
    res.render('./auth/login')
})


router.post('/register', async (req, res) => {
    try {
        let { email, name, phone, username, password } = req.body
        let user = new User({ username, name, email, phone });
        console.log(user)
        await User.register(user, password)
        res.redirect('/login');
    }
    catch (e) {
        console.log(e)
    }
})

router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/register',
            failureMessage: true
        }),
    function (req, res) {
        console.log('you are login')
        res.redirect('/')
    }
)


module.exports = router;