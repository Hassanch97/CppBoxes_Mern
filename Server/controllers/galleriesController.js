const db = require('../db');

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

// CREATE gallery
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

// DELETE gallery
exports.deleteGallery = (req, res) => {
  db.query('DELETE FROM galleries WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Gallery not found' });
    res.json({ message: 'Gallery deleted successfully' });
  });
};
