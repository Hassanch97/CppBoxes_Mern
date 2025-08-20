const express = require("express");
const router = express.Router();
const categoriesController = require("../controllers/categoriesController");

// Existing routes
router.get("/", categoriesController.getAllCategories);
router.get("/:id", categoriesController.getCategoryById);
router.post("/", categoriesController.createCategory);
router.put("/:id", categoriesController.updateCategory);
router.delete("/:id", categoriesController.deleteCategory);

// ✅ New count route
router.get("/count/total", categoriesController.getCategoryCount);

module.exports = router;
