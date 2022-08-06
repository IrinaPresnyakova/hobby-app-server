const express = require ('express');
const router = express.Router();
const { Projects } = require('../models');


// Archive projects page
// all projects' titles to show on /archive page
// router.get('/', async (req, res) => {
//     const listOfProjects = await Projects.findAll(
//         // where: (archived === true),
//         // attributes: [
//         //     'title',
            
//         // ]
//     ); 
//     res.json(listOfProjects); 
// })

router.get('/', async (req, res) => {
    const archivedProjects = await Projects.findAll({
        where: {
            archived: false
        },
        attributes: [
            'title',
            'archived'
        ]
}); 
    res.json(archivedProjects); 
})

module.exports = router