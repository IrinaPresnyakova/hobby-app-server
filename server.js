const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config()
const { PORT } = process.env

let currentProjects = require ('./routes/current');
const home = require ('./routes/home')
const about = require ('./routes/about')

app.use(express.json());
app.use(cors());

const db = require('./models')

db.sequelize.sync().then(()=> {
    app.listen(PORT, () => {
        console.log("Server is running on port 5500");
    });
});

// app.use('/current', currentProjects)
// app.use('/', home)
// app.use('/about', about)


// //get a single project using route parameters
// app.get('/current/:projectID', (req,res) => {
//     console.log(req.params);
//     const { projectID } = req.params;
//     const singleProject = currentProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
//     if (!singleProject) {
//         return res.status(404).send('Project does not exist')
//     }

//     res.json(singleProject)
// })

// // Get a list of all archived:
// app.get('/archived', (req,res) => {
//     res.status(200).json({success:true, data:archivedProjects})
// })

// //get a single archived project:

// app.get('/archived/:projectID', (req,res) => {
//     // console.log(req.params);
//     const { projectID } = req.params;
//     const singleArchivedProject = archivedProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
//     if (!singleArchivedProject) {
//         return res.status(404).send('Project does not exist')
//     }
//     res.json(singleArchivedProject)
// })

// // Get a list of bucket list projects
// app.get('/bucket-list', (req,res) => {
//     res.status(200).json({success:true, data:bucketListProjects})
// })

// // get a single bucket list project
// app.get('/bucket-list/:projectID', (req,res) => {
//     // console.log(req.params);
//     const { projectID } = req.params;
//     const singleBucketList = archivedProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
//     if (!singleBucketList) {
//         return res.status(404).send('Project does not exist')
//     }
//     res.json(singleBucketList)
// })



// app.all('*', (req, res) => {
//     res.status(404).send('Page not found, try something else')
// })

// app.post()







