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

router.get('/', async (req, res) => {    
        const {resources} = await cloudinary.search
            .expression('folder:hobby_app')
            .execute();
        const publicIds = resources.map( (file) => file.public_id);
        res.send(publicIds)
    })

router.post('/:projectId', async(req, res) => {
    console.log(req.body);
    const {image} = req.body

    const uploadedImage = await cloudinary.uploader.upload(image, {
        upload_preset: "unsigned_upload"
    })
    res.json(uploadedImage)

    // const imagePublicId = uploadedImage.public_id
    // console.log(imagePublicId);
    await Images.create(uploadedImage)
    // res.json(uploadedImage)
})

module.exports = router