const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); //Projects refers to an instance of the model Projects.js

// Current projects page

// Get all projects
router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll(); 
    res.json(listOfProjects); 
})

// Get project by id
router.get('/project/:id', async (req, res) => {
    const id = req.params.id
    const project = await Projects.findByPk(id) //Projects is the model
    res.json(project)
    // if (!singleProject) {
    //     return res.status(404).send('Project does not exist')
    // }
})


router.post('/', async (req, res) => {
    const postProject = req.body;
    await Projects.create(postProject);
    res.json(postProject);
})

module.exports = router