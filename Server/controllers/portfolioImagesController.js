const db = require('../db');

// GET all portfolio images
exports.getAllPortfolioImages = (req, res) => {
  db.query('SELECT * FROM portfolio_images', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET portfolio image by ID
exports.getPortfolioImageById = (req, res) => {
  db.query('SELECT * FROM portfolio_images WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Portfolio image not found' });
    res.json(results[0]);
  });
};

// CREATE portfolio image
exports.createPortfolioImage = (req, res) => {
  const {
    name,
    product_id,
    image,
    status,
    created_by
  } = req.body;

  const portfolioImageData = {
    name,
    product_id,
    image,
    status,
    created_date: new Date(),
    created_by
  };

  db.query('INSERT INTO portfolio_images SET ?', portfolioImageData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Portfolio image created successfully', id: result.insertId });
  });
};

// UPDATE portfolio image
exports.updatePortfolioImage = (req, res) => {
  const portfolioImageData = {
    ...req.body,
    updated_date: new Date()
  };

  db.query('UPDATE portfolio_images SET ? WHERE id = ?', [portfolioImageData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Portfolio image not found' });
    res.json({ message: 'Portfolio image updated successfully' });
  });
};

// DELETE portfolio image
exports.deletePortfolioImage = (req, res) => {
  db.query('DELETE FROM portfolio_images WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Portfolio image not found' });
    res.json({ message: 'Portfolio image deleted successfully' });
  });
};
