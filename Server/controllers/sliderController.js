const db = require('../db');

// GET all sliders
exports.getAllSliders = (req, res) => {
  db.query('SELECT * FROM slider', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET slider by ID
exports.getSliderById = (req, res) => {
  db.query('SELECT * FROM slider WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Slider not found' });
    res.json(results[0]);
  });
};

// CREATE slider
exports.createSlider = (req, res) => {
  const sliderData = req.body;
  db.query('INSERT INTO slider SET ?', sliderData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Slider created successfully', id: result.insertId });
  });
};

// UPDATE slider
exports.updateSlider = (req, res) => {
  const sliderData = req.body;
  db.query('UPDATE slider SET ? WHERE id = ?', [sliderData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Slider not found' });
    res.json({ message: 'Slider updated successfully' });
  });
};

// DELETE slider
exports.deleteSlider = (req, res) => {
  db.query('DELETE FROM slider WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Slider not found' });
    res.json({ message: 'Slider deleted successfully' });
  });
};
