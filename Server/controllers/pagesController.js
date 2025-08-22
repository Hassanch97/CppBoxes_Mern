const db = require('../db');
const Pages = require("../model/PagesModel");
const User = require("../model/usersModel");

// GET all pages
exports.getAllPages = async (req, res) => {
  // db.query('SELECT * FROM pages', (err, results) => {
  //   if (err) return res.status(500).json({ error: err.message });
  //   res.json(results);
  // });
  try {
    const pages = await Pages.findAll({
      include: [
        { model: User, as: 'createdUser', attributes: ['id', 'full_name', 'email'] },
        { model: User, as: 'updatedUser', attributes: ['id', 'full_name', 'email'] }
      ]
    });
    res.json(pages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching categories' });
  }
};

// GET page by ID
exports.getPageById = (req, res) => {
  db.query('SELECT * FROM pages WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Page not found' });
    res.json(results[0]);
  });
};

// CREATE page
exports.createPage = (req, res) => {
  const {
    name,
    slug,
    top_heading,
    top_description,
    status,
    meta_title,
    meta_description,
    meta_keywords,
    created_by
  } = req.body;

  const pageData = {
    name,
    slug,
    top_heading,
    top_description,
    status,
    meta_title,
    meta_description,
    meta_keywords,
    created_at: new Date(),
    created_by
  };

  db.query('INSERT INTO pages SET ?', pageData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Page created successfully', id: result.insertId });
  });
};

// UPDATE page
exports.updatePage = (req, res) => {
  const pageData = {
    ...req.body,
    updated_at: new Date()
  };

  db.query('UPDATE pages SET ? WHERE id = ?', [pageData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Page not found' });
    res.json({ message: 'Page updated successfully' });
  });
};

// DELETE page
exports.deletePage = (req, res) => {
  db.query('DELETE FROM pages WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Page not found' });
    res.json({ message: 'Page deleted successfully' });
  });
};
