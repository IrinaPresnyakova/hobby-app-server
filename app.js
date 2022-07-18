const express = require('express');
const app = express();
const logger = require('./logger')
// const hobbies = require ('./data/hobbies.json');


// with middleware
app.use(logger) //it envokes logger middleware for any route. Must be above app.get that uses it
// app.use('api', logger) //or if add a path, will only apply to that route

app.get('/', (req,res) => {
    console.log(req.user)
    res.send ('Home')
})

app.get('/about', (req,res) => {
    res.send ('About')
})

app.listen(5500, ()=> {
    console.log("Server is listening on port 5500......");
})


// app.get('/', (req, res)=> {
//     res.status(200).json(hobbies)
// })
// app.get('/', (req, res) => {
//     res.send('<h1>Home Page</h1><a href="/hobby-projects">Details on projects</a>')
// })

// app.get('/hobby-projects', (req,res) => {
//     const briefProject = hobbies.map((hobby) => {
//         const { id, name, image } = hobby
//         return { id, name, image }
//     })
//     res.json(briefProject)
// })
// //get a single project using route parameters

// app.get('/hobby-projects/:projectID', (req,res) => {
//     // console.log(req.params);
//     const { projectID } = req.params;
//     const singleProject = hobbies.find((hobby) => hobby.id === Number (projectID)) // just === productID if it's a string
//     if (!singleProject) {
//         return res.status(404).send('Project does not exist')
//     }

//     res.json(singleProject)
// })


// app.all('*', (req, res) => {
//     res.status(404).send('Page not found')
// })
