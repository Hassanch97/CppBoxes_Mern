const db = require('../db');

// GET all authors
exports.getAllAuthors = (req, res) => {
  db.query('SELECT * FROM authors ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET author by ID
exports.getAuthorById = (req, res) => {
  db.query('SELECT * FROM authors WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Author not found' });
    res.json(results[0]);
  });
};

// CREATE author
exports.createAuthor = (req, res) => {
  const { name, slug, feature_image, description, tags, designation, status, facebook, twitter, linkedin, instagram, meta_title, meta_keywords, meta_description, created_by, created_at, updated_by, updated_at } = req.body;

  if (!name || !slug) {
    return res.status(400).json({ error: 'Name and slug are required' });
  }

  const sql = `
    INSERT INTO authors 
    (name, slug, feature_image, description, tags, designation, status, facebook, twitter, linkedin, instagram, meta_title, meta_keywords, meta_description, created_by, created_at, updated_by, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    name, slug, feature_image || null, description || null, tags || null, designation || null, status || 'active',
    facebook || null, twitter || null, linkedin || null, instagram || null, meta_title || null, meta_keywords || null, meta_description || null,
    created_by || null, created_at || new Date(), updated_by || null, updated_at || new Date()
  ], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Author created successfully', id: result.insertId });
  });
};

// UPDATE author
exports.updateAuthor = (req, res) => {
  db.query('UPDATE authors SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Author not found' });
    res.json({ message: 'Author updated successfully' });
  });
};

// DELETE author
exports.deleteAuthor = (req, res) => {
  db.query('DELETE FROM authors WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Author not found' });
    res.json({ message: 'Author deleted successfully' });
  });
};
