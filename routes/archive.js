const express = require ('express');
const router = express.Router();
const { Projects } = require('../models');


// Archive projects page
// all projects' titles to show on /archive page
router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll({
        where: {'archived': 'archived'},
        attributes: [
            'title',
        ]}
    ); 
    res.json(listOfProjects); 
})

module.exports = router