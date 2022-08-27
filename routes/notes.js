const express = require ('express');
const router = express.Router();
const { Notes } = require('../models'); 
const { tokenValidator } = require('../middleware/Authenticate')

//get all notes for one project with id:
router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId
    const notes = await Notes.findAll ({
        where: { ProjectId: projectId }
    })
    res.json(notes)
});
 
//get one note
router.get('/:projectId/:id', async (req, res) => {
    const id = req.params.id
    const note = await Notes.findByPk(id) 
    res.json(note)
})

router.post('/:projectId', tokenValidator, async (req, res) => {
    const note = req.body;
    const username = req.user.username;
    note.username = username;
    await Notes.create(note);
    res.json(note)
})

router.delete('/:projectId/:id', async (req, res) => {
    const noteId = req.params.id;
    await Notes.destroy({
        where: {id: noteId}
    });
    res.send("This note was deleted")
})


module.exports = router