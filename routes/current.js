const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); //Projects refers to an instance of the model Projects.js

// Current projects page

router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll(); 
    res.json(listOfProjects); 
})

router.post('/', async (req, res) => {
    const postProject = req.body;
    await Projects.create(postProject);
    res.json(postProject);



})
//get a single project using route parameters
// router.get('/:projectID', (req,res) => {
//     // console.log(req.params);
//     const { projectID } = req.params;
//     const singleProject = currentProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
//     if (!singleProject) {
//         return res.status(404).send('Project does not exist')
//     }

//     res.json(singleProject)
// })



module.exports = router










// >>> from the BrainFlix proect, how to post with writing into a file
// const express = require('express');
// const router = express.Router();
// let videos = require ('../data/videos.json');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('fs')

// const writeToFile = (targetFile, newUpload ) => {
//     try {
//         fs.writeFileSync(targetFile, newUpload)
//         console.log(`Success`)
//         return true;
//     } catch (error) {
//         console.log(error)
//     }
// }
// router.post('/', (req, res) => {
//     const { id, title, description } = req.body;

//     videos.push ({
//         id: uuidv4(),
//         title, 
//         description
//     });

//     writeToFile('./data/videos.json', JSON.stringify(videos))

//     res.json(videos)
// })