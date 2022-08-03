const express = require ('express');
const router = express.Router();
const { Notes } = require('../models'); 

router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId
    const notes = await Notes.findAll ({
        where: { ProjectId: projectId}
    })
    res.json(notes)
});
 
router.post('/', async (req, res) => {
    const note = req.body;
    await Notes.create(note);
    res.json(note)
})

// router.delete("/noteId")

module.exports = router