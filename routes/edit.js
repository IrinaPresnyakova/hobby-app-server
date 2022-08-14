const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); //Projects refers to an instance of the model Projects.js

// Fetch a single project to render on the page
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const project = await Projects.findByPk(id) 
    res.json(project)
});

//Modify the data in the fields?
router.patch('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    const { title, materials, progress } = req.body
    await Projects.update(
        {
            title: title,
            materials: materials, 
            progress: progress
        },
        {
        where: {id: projectId}
    });
    res.send("This project was modified")
})

module.exports = router;