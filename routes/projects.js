const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); 

// single project shows on /projects/:id page
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const project = await Projects.findByPk(id) 
    res.json(project)
});


// // deleting is done from /projects/:id
router.delete('/:projectId', async (req, res) => {
    const id = req.params.projectId;
    await Projects.destroy({
        where: {id: id}
    });
    res.send("This project was deleted")
})

module.exports = router