const express = require('express');
const router = express.Router();
const galleriesController = require('../controllers/galleriesController');

router.get('/', galleriesController.getAllGalleries);
router.get('/:id', galleriesController.getGalleryById);
router.post('/', galleriesController.createGallery);
router.put('/:id', galleriesController.updateGallery);
router.delete('/:id', galleriesController.deleteGallery);

module.exports = router;
