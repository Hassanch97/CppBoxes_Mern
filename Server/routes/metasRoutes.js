const express = require('express');
const router = express.Router();
const metasController = require('../controllers/metasController');

router.get('/', metasController.getAllMetas);
router.get('/:id', metasController.getMetaById);
router.post('/', metasController.createMeta);
router.put('/:id', metasController.updateMeta);
router.delete('/:id', metasController.deleteMeta);
router.get('/category/:category_id', metasController.getMetasByCategoryId);

module.exports = router;
