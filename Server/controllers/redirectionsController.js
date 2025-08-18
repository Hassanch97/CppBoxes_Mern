const db = require('../db');

// GET all redirections
exports.getAllRedirections = (req, res) => {
  db.query('SELECT * FROM redirections', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET redirection by ID
exports.getRedirectionById = (req, res) => {
  db.query('SELECT * FROM redirections WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Redirection not found' });
    res.json(results[0]);
  });
};

// CREATE new redirection
exports.createRedirection = (req, res) => {
  const redirectionData = req.body;
  db.query('INSERT INTO redirections SET ?', redirectionData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Redirection created successfully', id: result.insertId });
  });
};

// UPDATE redirection
exports.updateRedirection = (req, res) => {
  const redirectionData = req.body;
  db.query('UPDATE redirections SET ? WHERE id = ?', [redirectionData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Redirection not found' });
    res.json({ message: 'Redirection updated successfully' });
  });
};

// DELETE redirection
exports.deleteRedirection = (req, res) => {
  db.query('DELETE FROM redirections WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Redirection not found' });
    res.json({ message: 'Redirection deleted successfully' });
  });
};
