const express = require ('express');
const router = express.Router();
const { Projects } = require('../models');
// Bucket list projects page
// all projects' titles to show on /bucket list page
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

// deleting is done from /:id
router.delete('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    await Projects.destroy({
        where: {id: projectId}
    });
    res.send("This project was deleted")
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