const bookController = require("../controllers/bookControllers")

const router = require("express").Router();

// Add a book 
router.post("/", bookController.addBook);

// Get all books 
router.get("/", bookController.getAllBooks);

//Get a book 
router.get('/:id', bookController.getABook);

// Update a book 
router.put('/:id', bookController.updateABook);

// Delete a book 
router.delete('/:id', bookController.deleteBook);

module.exports = router;