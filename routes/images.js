const express = require ('express');
const router = express.Router();
const { json } = require('body-parser')
require('dotenv').config()
const axios = require('axios')
const app = express();
const cors = require ('cors');
app.use(json())
app.use(cors());
const cloudinary = require("../cloudinary/cloudinary")
const { Images } = require('../models')

//For rendering: get data from DB
router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId
    const imagesBackEnd = await Images.findAll ({
        attributes: ["public_id", "id"],
        where: { 
            ProjectId: projectId,
         }
    })
    
    const publicIds = imagesBackEnd.map((file) => {
        return ({
            public_id: file.public_id, 
            id: file.id,   
            })
        });
    res.send(publicIds)//return an object 
    //console.log(imageDbId); //this prints image ids from DB to console
});


//For uploading: send images to cloudinary + save data into the database
router.post('/:projectId', async(req, res) => {
    const ProjectId = req.body.ProjectId;
    const { image } = req.body
    const uploadedImage = await cloudinary.uploader.upload(image, {
        upload_preset: "unsigned_upload"
    })
    res.json(uploadedImage)

    const newImage = await Images.create(uploadedImage)
    newImage.set({
        ProjectId: ProjectId
    })
    await newImage.save();
})

//get one image
router.get('/:projectId/:id', async(req, res) => {
    const imageId = req.params.id;
    const imageData = await Images.findByPk(imageId)
    res.json(imageData)
    console.log(imageId);
})

//For deleting: needs to be 2 things: from DB and from Cloudinary
router.delete('/:projectId/:id', async (req, res) => {
    const imageId = req.params.id;
    await Images.destroy({
        where: {id: imageId}
    })
    res.send("Message from backend: This image was deleted")
})

module.exports = router