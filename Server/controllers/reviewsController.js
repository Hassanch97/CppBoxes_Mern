const db = require('../db');

// GET all reviews
exports.getAllReviews = (req, res) => {
  db.query('SELECT * FROM reviews', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET review by ID
exports.getReviewById = (req, res) => {
  db.query('SELECT * FROM reviews WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ message: 'Review not found' });
    res.json(results[0]);
  });
};

// CREATE review
exports.createReview = (req, res) => {
  const reviewData = req.body;
  db.query('INSERT INTO reviews SET ?', reviewData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Review created successfully', id: result.insertId });
  });
};

// UPDATE review
exports.updateReview = (req, res) => {
  const reviewData = req.body;
  db.query('UPDATE reviews SET ? WHERE id = ?', [reviewData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result.affectedRows) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review updated successfully' });
  });
};

// DELETE review
exports.deleteReview = (req, res) => {
  db.query('DELETE FROM reviews WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result.affectedRows) return res.status(404).json({ message: 'Review not found' });
    res.json({ message: 'Review deleted successfully' });
  });
};
