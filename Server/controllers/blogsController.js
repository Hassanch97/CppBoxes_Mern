const db = require('../db');

// GET all blogs with category name
exports.getAllBlogs = (req, res) => {
  const sql = `
    SELECT blogs.*, blog_categories.name AS category_name
    FROM blogs
    LEFT JOIN blog_categories ON blogs.category = blog_categories.id
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET blog by ID
exports.getBlogById = (req, res) => {
  const sql = `
    SELECT blogs.*, blog_categories.name AS category_name
    FROM blogs
    LEFT JOIN blog_categories ON blogs.category = blog_categories.id
    WHERE blogs.id = ?
  `;
  db.query(sql, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Blog not found' });
    res.json(results[0]);
  });
};

// CREATE blog
exports.createBlog = (req, res) => {
  const data = req.body;
  db.query('INSERT INTO blogs SET ?', data, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Blog created successfully', id: result.insertId });
  });
};

// UPDATE blog
exports.updateBlog = (req, res) => {
  const data = req.body;
  db.query('UPDATE blogs SET ? WHERE id = ?', [data, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog updated successfully' });
  });
};

// DELETE blog
exports.deleteBlog = (req, res) => {
  db.query('DELETE FROM blogs WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Blog not found' });
    res.json({ message: 'Blog deleted successfully' });
  });
};
