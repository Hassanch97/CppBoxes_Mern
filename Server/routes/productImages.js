const express = require('express');
const router = express.Router();
const productImagesController = require('../controllers/productImagesController');

// All images
router.get('/', productImagesController.getAllProductImages);

// Images by product
router.get('/product/:product_id', productImagesController.getImagesByProductId);

// Single image
router.get('/:id', productImagesController.getProductImageById);

// Create
router.post('/', productImagesController.createProductImage);

// Update
router.put('/:id', productImagesController.updateProductImage);

// Delete
router.delete('/:id', productImagesController.deleteProductImage);

module.exports = router;
