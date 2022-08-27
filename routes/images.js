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

// const BASE_URL = `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image`

// const cloudAuth = {
//     Username: process.env.API_KEY,
//     Password: process.env.API_SECRET,
// }

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

module.exports = router