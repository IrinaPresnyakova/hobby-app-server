const express = require('express');
const app = express();
const cors = require ('cors');
const { json } = require('body-parser')
require('dotenv').config()
const { PORT } = process.env

app.use(express.json({limit: "50mb"}));
app.use(cors());
app.use(json())
const db = require('./models')
app.use( express.urlencoded({extended: true, limit: '50mb'}))

//Routers
const currentRouter = require ('./routes/current');
app.use('/current', currentRouter)
const notesRouter = require ('./routes/notes')
app.use('/projects/notes', notesRouter)
const projectRouter = require ('./routes/projects')
app.use('/projects', projectRouter)
const archiveRouter = require ('./routes/archive')
app.use('/archive', archiveRouter)
const singleArchRouter = require ('./routes/singleArchived')
app.use('/archive-view', singleArchRouter)
const bucketListRouter = require ('./routes/bucket-list')
app.use('/bucket-list', bucketListRouter)
const singleBucket = require ('./routes/singleBucket')
app.use('/bucket-list-view', singleBucket)
const edit = require ('./routes/edit')
app.use('/edit-project', edit)
const usersRouter = require ('./routes/users')
app.use('/auth', usersRouter)
const imagesRouter = require ('./routes/images')
app.use('/images', imagesRouter)
// {alter: true} to update DB tables
db.sequelize.sync().then(()=> {
    app.listen(PORT, () => {
        console.log("Server is running on port 5500");
    });
});





