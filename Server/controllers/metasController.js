const db = require('../db');

// GET all metas
exports.getAllMetas = (req, res) => {
  const query = `
    SELECT m.*, c.name AS category_name 
    FROM metas m
    LEFT JOIN categories c ON m.category_id = c.id
  `;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET meta by ID
exports.getMetaById = (req, res) => {
  const query = `
    SELECT m.*, c.name AS category_name 
    FROM metas m
    LEFT JOIN categories c ON m.category_id = c.id
    WHERE m.id = ?
  `;
  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ message: 'Meta not found' });
    res.json(results[0]);
  });
};

// GET metas by category_id
exports.getMetasByCategoryId = (req, res) => {
  const { category_id } = req.params;
  const query = `
    SELECT m.*, c.name AS category_name 
    FROM metas m
    LEFT JOIN categories c ON m.category_id = c.id
    WHERE m.category_id = ?
  `;
  db.query(query, [category_id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!results.length) return res.status(404).json({ message: 'No metas found for this category' });
    res.json(results);
  });
};

// CREATE meta
exports.createMeta = (req, res) => {
  const metaData = req.body;
  db.query('INSERT INTO metas SET ?', metaData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Meta created successfully', id: result.insertId });
  });
};

// UPDATE meta
exports.updateMeta = (req, res) => {
  const metaData = req.body;
  db.query('UPDATE metas SET ? WHERE id = ?', [metaData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result.affectedRows) return res.status(404).json({ message: 'Meta not found' });
    res.json({ message: 'Meta updated successfully' });
  });
};

// DELETE meta
exports.deleteMeta = (req, res) => {
  db.query('DELETE FROM metas WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!result.affectedRows) return res.status(404).json({ message: 'Meta not found' });
    res.json({ message: 'Meta deleted successfully' });
  });
};
