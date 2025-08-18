const db = require('../db');

// GET all comments with blog name
exports.getAllComments = (req, res) => {
  const sql = `
    SELECT blog_comments.*, blogs.name AS blog_name
    FROM blog_comments
    LEFT JOIN blogs ON blog_comments.blog_id = blogs.id
    ORDER BY blog_comments.date_time DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET comments for a specific blog
exports.getCommentsByBlogId = (req, res) => {
  const sql = `
    SELECT blog_comments.*, blogs.name AS blog_name
    FROM blog_comments
    LEFT JOIN blogs ON blog_comments.blog_id = blogs.id
    WHERE blog_comments.blog_id = ?
    ORDER BY blog_comments.date_time DESC
  `;
  db.query(sql, [req.params.blogId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET single comment by ID
exports.getCommentById = (req, res) => {
  db.query('SELECT * FROM blog_comments WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Comment not found' });
    res.json(results[0]);
  });
};

// CREATE comment
exports.createComment = (req, res) => {
  const { blog_id, comment, name, email, website, status, date_time } = req.body;

  if (!blog_id || !comment || !name || !email) {
    return res.status(400).json({ error: 'blog_id, comment, name, and email are required' });
  }

  const sql = 'INSERT INTO blog_comments (blog_id, comment, name, email, website, status, date_time) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [blog_id, comment, name, email, website || null, status || 'pending', date_time || new Date()], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Comment created successfully', id: result.insertId });
  });
};

// UPDATE comment
exports.updateComment = (req, res) => {
  db.query('UPDATE blog_comments SET ? WHERE id = ?', [req.body, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Comment not found' });
    res.json({ message: 'Comment updated successfully' });
  });
};

// DELETE comment
exports.deleteComment = (req, res) => {
  db.query('DELETE FROM blog_comments WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Comment not found' });
    res.json({ message: 'Comment deleted successfully' });
  });
};
