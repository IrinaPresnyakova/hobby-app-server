const express = require('express');
const app = express();
const cors = require ('cors');
require('dotenv').config()
const { PORT } = process.env
app.use(express.json());
app.use(cors());
const db = require('./models')

//Routers
const currentRouter = require ('./routes/current');
app.use('/current', currentRouter)
const notesRouter = require ('./routes/notes')
app.use('/notes', notesRouter)
const projectRouter = require ('./routes/projects')
app.use('/projects', projectRouter)
const archiveRouter = require ('./routes/archive')
app.use('/archive', archiveRouter)

db.sequelize.sync().then(()=> {
    app.listen(PORT, () => {
        console.log("Server is running on port 5500");
    });
});





