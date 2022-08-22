const express = require ('express');
const router = express.Router();
const { parsed: config } = dotenv.config();
const BASE_URL = `https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`

const cloudAuth = {
    cloudUser: config.API_KEY,
    cloudPassword: config.API_SECRET,
}

router.get('/', async (req, res) => {

    res.send('pictures done')
});

module.exports = router