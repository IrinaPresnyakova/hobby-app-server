const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); //Projects refers to an instance of the model Projects.js
const { tokenValidator } = require ('../middleware/Authenticate') 


// Current projects page
// all projects show on /current page
router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll({
        where: {'archived': 'active'}
    }); 
    res.json(listOfProjects); 
})

// posting is done from /current page 
router.post('/', async (req, res) => {
    const postProject = req.body;
    await Projects.create(postProject);
    res.json(postProject);
})

module.exports = router
