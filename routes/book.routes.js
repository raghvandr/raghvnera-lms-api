const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const { authorize } = require("../middleware/auth.middleware");

router.post("/", authorize(["Admin"]), bookController.createBook);
router.get("/", authorize(["Admin", "Librarian", "Member"]), bookController.getBooks);

module.exports = router;
