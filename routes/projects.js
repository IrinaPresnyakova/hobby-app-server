const express = require ('express');
const router = express.Router();
const { Projects } = require('../models'); 

// single project shows on /project/:id page
router.get('/:id', async (req, res) => {
    const id = req.params.id
    const project = await Projects.findByPk(id) 
    res.json(project)
})


//deleting is done from /project/:id
// router.delete('/:id', async (req, res) => {
//     const id = req.params.id;
    
//     await Projects.destroy({
//         where: {
//             id: id
//         }
//     });
//     console.log(id);
//     res.json("This project was deleted")
// })

module.exports = router