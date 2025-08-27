const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const galleriesController = require('../controllers/galleriesController');

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); // store in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // unique filename
  }
});

const upload = multer({ storage });

// Routes
router.get('/', galleriesController.getAllGalleries);
router.get('/:id', galleriesController.getGalleryById);
router.post('/', galleriesController.createGallery);
router.put('/:id', galleriesController.updateGallery);
router.delete('/:id', galleriesController.deleteGallery);

// Upload route (file + metadata)
router.post('/upload', upload.single('image'), galleriesController.uploadImage);

module.exports = router;
