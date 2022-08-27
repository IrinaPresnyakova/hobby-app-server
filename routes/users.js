const express = require ('express');
const router = express.Router();
const { Users } = require('../models'); //Projects refers to an instance of the model Projects.js
const bcrypt = require('bcrypt');
const { sign } = require ('jsonwebtoken')
const { tokenValidator } = require ('../middleware/Authenticate') 

// Users page

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    bcrypt
        .hash(password, 10) 
        .then ((hash) => {
            Users.create({
                username: username,
                password: hash
            })
            res.json("Completed")
    })

})

router.post('/login', async(req, res) => {
    //grab username and password
    const { username, password } = req.body;
    //data will come in from two inputs, for username and password
    //first we check if username exists. Sequelize will go to Users table and find only one user that has this name, that is, the cell in the table matches the input of the person from the form. If there is no user with such name, const will be empty. If there is, it will populate with values for that user.
    const user = await Users.findOne({ where: {username: username} });

    // If no user found, throw an error: 
    if (!user) {
        res.json({error: "User not found!"})
    };
    // If user exists, we will compare hash from the input password with the user.password from the table, also hash: 
    bcrypt.compare(password, user.password).then(async(match) => {
        if (!match) {
            res.json({ error: "Password does not match username" });
        }
    //if the user successfully logged in, we can generate a token: 
        const tokenForAccess = sign(
            { username: user.username, id: user.id }, 
            "secretkeytoaccess"
            );
    //now we need to not just show 'login successful' but pass the token to the front end: 
        // res.json("Login successful")
        res.json({token: tokenForAccess, username: user.username, id: user.id})
    })
})

router.get('/verify', tokenValidator, (req, res) => {
    res.json(req.user)
})

module.exports = router;
