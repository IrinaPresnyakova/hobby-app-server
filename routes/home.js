const express = require ('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('<h1>Home Page</h1><a href="/current">Details on projects</a>')
})


module.exports = router