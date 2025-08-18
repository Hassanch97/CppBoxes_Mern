const express = require('express');
const router = express.Router();
const portfolioImagesController = require('../controllers/portfolioImagesController');

router.get('/', portfolioImagesController.getAllPortfolioImages);
router.get('/:id', portfolioImagesController.getPortfolioImageById);
router.post('/', portfolioImagesController.createPortfolioImage);
router.put('/:id', portfolioImagesController.updatePortfolioImage);
router.delete('/:id', portfolioImagesController.deletePortfolioImage);

module.exports = router;
