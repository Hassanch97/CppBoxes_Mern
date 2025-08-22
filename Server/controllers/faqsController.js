const db = require('../db');
const Faq = require("../model/FaqModel");
const User = require("../model/usersModel");

// GET all FAQs
exports.getAllFaqs = async (req, res) => {
  // db.query('SELECT * FROM faqs', (err, results) => {
  //   if (err) return res.status(500).json({ error: err.message });
  //   res.json(results);
  // });
  try {
      const faqs = await Faq.findAll({
        include: [
          { model: User, as: 'createdUser', attributes: ['id', 'full_name', 'email'] },
          { model: User, as: 'updatedUser', attributes: ['id', 'full_name', 'email'] }
        ]
      });
      res.json(faqs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching faqs' });
  }
};

// GET FAQ by ID
exports.getFaqById = (req, res) => {
  db.query('SELECT * FROM faqs WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'FAQ not found' });
    res.json(results[0]);
  });
};

// CREATE FAQ
exports.createFaq = (req, res) => {
  const faqData = req.body;
  db.query('INSERT INTO faqs SET ?', faqData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'FAQ created successfully', id: result.insertId });
  });
};

// UPDATE FAQ
exports.updateFaq = (req, res) => {
  const faqData = req.body;
  db.query('UPDATE faqs SET ? WHERE id = ?', [faqData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'FAQ not found' });
    res.json({ message: 'FAQ updated successfully' });
  });
};

// DELETE FAQ
exports.deleteFaq = (req, res) => {
  db.query('DELETE FROM faqs WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'FAQ not found' });
    res.json({ message: 'FAQ deleted successfully' });
  });
};
