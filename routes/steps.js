const express = require ('express');
const router = express.Router();
const { Steps } = require('../models'); 

router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId
    const steps = await Steps.findAll({where: {ProjectId: projectId}}) 
    res.json(steps)
})

// router.post("/", async(req, res) => {
    
// })

module.exports = router