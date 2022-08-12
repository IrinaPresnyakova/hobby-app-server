const express = require ('express');
const router = express.Router();
const { Projects } = require('../models');


// Single project on a page: 
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const project = await Projects.findByPk(id) 
    res.json(project)
});

router.delete('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    await Projects.destroy({
        where: {id: projectId}
    });
    res.send("This project was deleted")
})

router.patch('/:projectId', async (req, res) => {
    const projectId = req.params.projectId;
    await Projects.update(
        {
            bucketList: "active"
        },
        {
        where: {id: projectId}
    });
    res.send("This project was moved to current")
})
module.exports = router