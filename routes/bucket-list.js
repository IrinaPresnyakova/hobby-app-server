const express = require ('express');
const router = express.Router();
const { BucketList } = require('../models');


//Bucket list page
router.get('/', async (req, res) => {
    const bucketListOfProjects = await BucketList.findAll(

    );
    res.json(bucketListOfProjects);    
})

module.exports = router