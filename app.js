const express = require('express');
const app = express();
const morgan = require('morgan')

// let currentProjects = require ('./data/currentProjects.json');
let currentProjects = require ('./routes/current');
let archivedProjects = require('./data/archivedProjects.json')
let bucketListProjects = require('./data/bucketListProjects.json')

app.use(morgan('tiny'))
app.use('/current', currentProjects)

app.get('/', (req,res) => {
    res.send('<h1>Home Page</h1><a href="/current">Details on projects</a>')
})

app.get('/about', (req,res) => {
    res.send ('About')
})

// Current projects page

// app.get('/api/current', (req,res) => {
//     const briefProject = currentProjects.map((project) => {
//         const { id, name, image } = project
//         return { id, name, image }
//     })
//     res.json(briefProject)
// })

//get a single project using route parameters
app.get('/api/current/:projectID', (req,res) => {
    // console.log(req.params);
    const { projectID } = req.params;
    const singleProject = currentProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
    if (!singleProject) {
        return res.status(404).send('Project does not exist')
    }

    res.json(singleProject)
})

// Get a list of all archived:
app.get('/api/archived', (req,res) => {
    res.status(200).json({success:true, data:archivedProjects})
})

//get a single archived project:

app.get('/api/archived/:projectID', (req,res) => {
    // console.log(req.params);
    const { projectID } = req.params;
    const singleArchivedProject = archivedProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
    if (!singleArchivedProject) {
        return res.status(404).send('Project does not exist')
    }
    res.json(singleArchivedProject)
})

// Get a list of bucket list projects
app.get('/api/bucket-list', (req,res) => {
    res.status(200).json({success:true, data:bucketListProjects})
})

// get a single bucket list project
app.get('/api/bucket-list/:projectID', (req,res) => {
    // console.log(req.params);
    const { projectID } = req.params;
    const singleBucketList = archivedProjects.find((project) => project.id === Number (projectID)) // just === productID if it's a string
    if (!singleBucketList) {
        return res.status(404).send('Project does not exist')
    }
    res.json(singleBucketList)
})



app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

// app.post()






app.listen(5500, ()=> {
    console.log("Server is listening on port 5500......");
})






