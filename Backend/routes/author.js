const authorController = require("../controllers/authorController");

const router = require("express").Router();

// Add Author 
router.post('/', authorController.addAuthor)

// Get all author 
router.get('/', authorController.getAllAuthors)

// Get an author 
router.get('/:id', authorController.getAnAuthor)

// Update author
router.put('/:id', authorController.updateAuthor)

// Delete author 
router.delete('/:id', authorController.deleteAuthor);

module.exports = router;