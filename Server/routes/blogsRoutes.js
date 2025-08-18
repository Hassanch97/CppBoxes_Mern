const express = require('express');
const router = express.Router();
const blogsController = require('../controllers/blogsController');

router.get('/', blogsController.getAllBlogs);
router.get('/:id', blogsController.getBlogById);
router.post('/', blogsController.createBlog);
router.put('/:id', blogsController.updateBlog);
router.delete('/:id', blogsController.deleteBlog);

module.exports = router;
