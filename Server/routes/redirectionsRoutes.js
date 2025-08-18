const express = require('express');
const router = express.Router();
const redirectionsController = require('../controllers/redirectionsController');

router.get('/', redirectionsController.getAllRedirections);
router.get('/:id', redirectionsController.getRedirectionById);
router.post('/', redirectionsController.createRedirection);
router.put('/:id', redirectionsController.updateRedirection);
router.delete('/:id', redirectionsController.deleteRedirection);

module.exports = router;
