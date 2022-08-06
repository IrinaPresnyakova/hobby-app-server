const express = require ('express');
const router = express.Router();
const { Projects } = require('../models');


// Archive projects page
// all projects' titles to show on /archive page
router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll({
        where: {'archived': 'archived'},
        attributes: [
            'id',
            'title',
        ]}
    ); 
    res.json(listOfProjects); 
})

router.patch('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    await Projects.update(
        {
            archived: "active"
        },
        {
        where: {id: projectId}
    });
    res.send("This project was returned to current")
})

module.exports = router