const express = require('express');
const router = express.Router();
const blogCommentsController = require('../controllers/blogCommentsController');

router.get('/', blogCommentsController.getAllComments);
router.get('/blog/:blogId', blogCommentsController.getCommentsByBlogId);
router.get('/:id', blogCommentsController.getCommentById);
router.post('/', blogCommentsController.createComment);
router.put('/:id', blogCommentsController.updateComment);
router.delete('/:id', blogCommentsController.deleteComment);

module.exports = router;
