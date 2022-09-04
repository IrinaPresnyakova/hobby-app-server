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
        attributes: ["public_id"],
        where: { 
            ProjectId: projectId,
         }
    })
    const publicIds = imagesBackEnd.map( (file) => file.public_id);
    res.send(publicIds)
});

//get one image???
router.get('/:projectId/:imageId', async(req, res) => {
    const id = req.params.id;
    const image = await Images.findByPk(id)
    res.json(image)
})

//For uploading: send images to cloudinary + save data into the database
router.post('/:projectId', async(req, res) => {
    const ProjectId = req.body.ProjectId;
    const {image} = req.body
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

//For deleting: needs to be 2 things: from DB and from Cloudinary
router.delete('/:projectId/:id', async (req, res) => {
    const imageId = req.params.id;
    await Images.destroy({
        where: {id: imageId}
    })
})

module.exports = router