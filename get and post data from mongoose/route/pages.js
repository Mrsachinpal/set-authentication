const express = require('express');
const User = require('../model/User');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        let userdata = await User.find({})
        res.render('home', { userdata });
    } catch (e) {
        console.log(e)
    }

})
router.get('/user/add', (req, res) => {
    res.render('addUser')
})

router.post('/user/add', (req, res) => {
    try {
        let { name, id, password, joinDate } = req.body
        User.create({ name, id, password, joinDate })
        console.log(`New user added `)
        res.redirect('/')
    } catch (e) {
        console.log(`user didn't post in database due to some reason:-  ${e}`)
    }
})

router.get('/api/data',async (req, res) => {
    let userdata = await User.find({})
    res.json(userdata);
  });

module.exports = router 