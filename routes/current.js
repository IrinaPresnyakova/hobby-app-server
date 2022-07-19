const express = require ('express')
const router = express.Router()
let currentProjects = require ('../data/currentProjects.json');

// Current projects page

router.get('/', (req,res) => {
    const briefProject = currentProjects.map((project) => {
        const { id, name, image } = project
        return { id, name, image }
    })
    res.json(briefProject)
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

// add a new project to current
// app.post

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