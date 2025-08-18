const express = require('express');
const router = express.Router();
const faqsController = require('../controllers/faqsController');

router.get('/', faqsController.getAllFaqs);
router.get('/:id', faqsController.getFaqById);
router.post('/', faqsController.createFaq);
router.put('/:id', faqsController.updateFaq);
router.delete('/:id', faqsController.deleteFaq);

module.exports = router;
