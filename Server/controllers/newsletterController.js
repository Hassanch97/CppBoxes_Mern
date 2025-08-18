const db = require('../db');

// GET all newsletters
exports.getAllNewsletters = (req, res) => {
  db.query('SELECT * FROM newsletter', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET newsletter by ID
exports.getNewsletterById = (req, res) => {
  db.query('SELECT * FROM newsletter WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Newsletter not found' });
    res.json(results[0]);
  });
};

// CREATE newsletter entry
exports.createNewsletter = (req, res) => {
  const { email, title, url } = req.body;

  const newsletterData = {
    email,
    title,
    url,
    date_time: new Date()
  };

  db.query('INSERT INTO newsletter SET ?', newsletterData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Newsletter entry created successfully', id: result.insertId });
  });
};

// UPDATE newsletter entry
exports.updateNewsletter = (req, res) => {
  const newsletterData = req.body;
  db.query('UPDATE newsletter SET ? WHERE id = ?', [newsletterData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Newsletter not found' });
    res.json({ message: 'Newsletter updated successfully' });
  });
};

// DELETE newsletter entry
exports.deleteNewsletter = (req, res) => {
  db.query('DELETE FROM newsletter WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Newsletter not found' });
    res.json({ message: 'Newsletter deleted successfully' });
  });
};
