const db = require('../db');

// GET all categories
exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM blog_categories', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET category by ID
exports.getCategoryById = (req, res) => {
  db.query('SELECT * FROM blog_categories WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Category not found' });
    res.json(results[0]);
  });
};

// CREATE category
exports.createCategory = (req, res) => {
  const data = req.body;
  db.query('INSERT INTO blog_categories SET ?', data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Category created successfully', id: result.insertId });
  });
};

// UPDATE category
exports.updateCategory = (req, res) => {
  const data = req.body;
  db.query('UPDATE blog_categories SET ? WHERE id = ?', [data, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category updated successfully' });
  });
};

// DELETE category
exports.deleteCategory = (req, res) => {
  db.query('DELETE FROM blog_categories WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  });
};
