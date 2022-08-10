const express = require ('express');
const router = express.Router();
const { Projects } = require('../models');
// Bucket list projects page
// all projects' titles to show on /archive page
router.get('/', async (req, res) => {
    const listOfProjects = await Projects.findAll({
        where: {'bucketList': 'bucketed'},
        attributes: [
            'id',
            'title',
        ]}
    ); 
    res.json(listOfProjects); 
})

router.post('/', async (req, res) => {
    const postProject = req.body;
    await Projects.create(postProject);
    res.json(postProject);
})

module.exports = router













// const express = require ('express');
// const router = express.Router();
// const { BucketList } = require('../models');


// //Bucket list page
// router.get('/', async (req, res) => {
//     const bucketListOfProjects = await BucketList.findAll(

//     );
//     res.json(bucketListOfProjects);    
// })

// module.exports = router