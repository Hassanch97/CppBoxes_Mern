const db = require('../db');

// GET all product images
exports.getAllProductImages = (req, res) => {
  db.query('SELECT * FROM product_images', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET product images by product_id
exports.getImagesByProductId = (req, res) => {
  db.query('SELECT * FROM product_images WHERE product_id = ?', [req.params.product_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET single image by ID
exports.getProductImageById = (req, res) => {
  db.query('SELECT * FROM product_images WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Product image not found' });
    res.json(results[0]);
  });
};

// CREATE product image
exports.createProductImage = (req, res) => {
  const imageData = req.body;
  db.query('INSERT INTO product_images SET ?', imageData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Product image created successfully', id: result.insertId });
  });
};

// UPDATE product image
exports.updateProductImage = (req, res) => {
  const imageData = req.body;
  db.query('UPDATE product_images SET ? WHERE id = ?', [imageData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product image not found' });
    res.json({ message: 'Product image updated successfully' });
  });
};

// DELETE product image
exports.deleteProductImage = (req, res) => {
  db.query('DELETE FROM product_images WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product image not found' });
    res.json({ message: 'Product image deleted successfully' });
  });
};
