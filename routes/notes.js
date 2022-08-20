const express = require ('express');
const router = express.Router();
const { Notes } = require('../models'); 
const { tokenValidator } = require('../middleware/Authenticate')

router.get('/:projectId', async (req, res) => {
    const projectId = req.params.projectId
    const notes = await Notes.findAll ({
        where: { ProjectId: projectId}
    })
    res.json(notes)
});
 
router.post('/', tokenValidator, async (req, res) => {
    const note = req.body;
    const username = req.user.username;
    note.username = username;
    await Notes.create(note);
    res.json(note)
})

router.delete('/:noteId', tokenValidator, async (req, res) => {
    const noteId = req.params.noteId
    Notes.destroy({where: {
        id: noteId
    },
})
}
)



module.exports = router