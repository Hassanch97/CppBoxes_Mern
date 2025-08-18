const express = require('express');
const router = express.Router();
const blogCategoriesController = require('../controllers/blogCategoriesController');

router.get('/', blogCategoriesController.getAllCategories);
router.get('/:id', blogCategoriesController.getCategoryById);
router.post('/', blogCategoriesController.createCategory);
router.put('/:id', blogCategoriesController.updateCategory);
router.delete('/:id', blogCategoriesController.deleteCategory);

module.exports = router;
