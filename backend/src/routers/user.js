const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()



router.post('/users/login', async (req, res) => {
    try {
        console.log(req.body)

        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})
var testUser = new User({
    email: "user1",
    password: "user1"
});
var testUser2 = new User({
    email: "user2",
    password: "user2"
});

async function  hardregister(testUserda )
  {


    try {

      await User.findByCredentials(testUserda.email, testUserda.password)



    }
    catch (error) {

        try {

           await testUserda.save()

        }
        catch (error) {


        }
    }
}
hardregister(testUser2).then(hardregister(testUser))




router.post('/users/logout', auth, async (req, res) => {
    try {

        req.user.tokens = req.user.tokens.filter((token) => {


            return token.token !== req.token
        })
        await req.user.save()
        console.log(req.user)

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        console.log(req.user)

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router