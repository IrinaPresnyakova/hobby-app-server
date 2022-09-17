const express = require ('express');
const router = express.Router();
const { Notes } = require('../models'); 
const { tokenValidator } = require('../middleware/Authenticate')

//get all notes for one project with id:
router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId
    const notes = await Notes.findAll ({
        where: { 
            ProjectId: projectId,
     }
    })
    res.json(notes)
    console.log("All notes", notes); //returns list of obj including note IDs

});
 
//get one note
router.get('/:projectId/:id', async (req, res) => {
    const noteId = req.params.id
    const note = await Notes.findByPk(noteId) 
    res.json(note)
    console.log("note id!!! ", noteId); //returns note id
    console.log(note); //returns an obj including note id
})

router.post('/:projectId',  async (req, res) => {
    const noteId = req.body.id;
    const note = req.body;
    // const username = req.user.username;
    // note.username = username;
    await Notes.create(note);
    res.json(note)
    console.log('this is a note that I posted', note); // note created and id assigned, no need to manually add id
})


router.delete('/:projectId/:id', async (req, res) => {
    const noteId = req.params.id;
    await Notes.destroy({
        where: {id: noteId}
    });
    res.send("This note was deleted")
})


module.exports = router