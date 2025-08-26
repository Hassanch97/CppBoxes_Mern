const db = require('../db');
const fs = require('fs');
const path = require('path');

// GET all galleries
exports.getAllGalleries = (req, res) => {
  db.query('SELECT * FROM galleries', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET gallery by ID
exports.getGalleryById = (req, res) => {
  db.query('SELECT * FROM galleries WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Gallery not found' });
    res.json(results[0]);
  });
};

// CREATE gallery (manual JSON insert, not file upload)
exports.createGallery = (req, res) => {
  const galleryData = req.body;
  db.query('INSERT INTO galleries SET ?', galleryData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Gallery created successfully', id: result.insertId });
  });
};

// UPDATE gallery
exports.updateGallery = (req, res) => {
  const galleryData = req.body;
  db.query('UPDATE galleries SET ? WHERE id = ?', [galleryData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Gallery not found' });
    res.json({ message: 'Gallery updated successfully' });
  });
};

// DELETE gallery (remove DB row + file)
exports.deleteGallery = (req, res) => {
  db.query('SELECT * FROM galleries WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Gallery not found' });

    const imagePath = path.join(__dirname, '../', results[0].image_path);

    db.query('DELETE FROM galleries WHERE id = ?', [req.params.id], (err2) => {
      if (err2) return res.status(500).json({ error: err2.message });

      // Delete file from filesystem if exists
      fs.unlink(imagePath, (unlinkErr) => {
        if (unlinkErr) console.warn('File not found or already deleted:', imagePath);
      });

      res.json({ message: 'Gallery deleted successfully' });
    });
  });
};

// UPLOAD image with file + metadata
exports.uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const { alt, detail } = req.body;
  const filePath = `/uploads/${req.file.filename}`;

  const galleryData = {
    image_name: req.file.filename,
    image_path: filePath,
    alt: alt || '',
    detail: detail || '',
    created_at: new Date(),
    updated_at: new Date(),
    created_by: 1, // replace with logged in user id if you add auth
    updated_by: 1
  };

  db.query('INSERT INTO galleries SET ?', galleryData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({
      message: 'Image uploaded successfully',
      id: result.insertId,
      data: galleryData
    });
  });
};
