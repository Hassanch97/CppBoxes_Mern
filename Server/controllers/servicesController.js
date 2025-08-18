const db = require('../db');

// GET all services
exports.getAllServices = (req, res) => {
  db.query('SELECT * FROM services', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET service by ID
exports.getServiceById = (req, res) => {
  db.query('SELECT * FROM services WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Service not found' });
    res.json(results[0]);
  });
};

// CREATE new service
exports.createService = (req, res) => {
  const serviceData = req.body;
  db.query('INSERT INTO services SET ?', serviceData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Service created successfully', id: result.insertId });
  });
};

// UPDATE service
exports.updateService = (req, res) => {
  const serviceData = req.body;
  db.query('UPDATE services SET ? WHERE id = ?', [serviceData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service updated successfully' });
  });
};

// DELETE service
exports.deleteService = (req, res) => {
  db.query('DELETE FROM services WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted successfully' });
  });
};
