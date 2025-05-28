const express = require("express");
const router = express.Router();
const { createCategory, getAllCategories, updateCategory, deleteCategory } = require("../controllers/category.controller");
const authenticate = require("../middleware/auth.middleware");

// Routes
router.post("/", authenticate, createCategory);
router.get("/", getAllCategories);
router.put("/:id", authenticate, updateCategory);
router.delete("/:id", authenticate, deleteCategory);

module.exports = router;
