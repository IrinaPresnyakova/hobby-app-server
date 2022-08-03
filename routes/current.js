const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); //Projects refers to an instance of the model Projects.js

// Current projects page
// all projects show on /current page
router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll(); 
    res.json(listOfProjects); 
})

// posting is done from /current page 
router.post('/', async (req, res) => {
    const postProject = req.body;
    await Projects.create(postProject);
    res.json(postProject);
})


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