const db = require('../db');

// ✅ GET all categories
exports.getAllCategories = (req, res) => {
  db.query('SELECT * FROM categories', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// ✅ GET category by ID
exports.getCategoryById = (req, res) => {
  db.query('SELECT * FROM categories WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Category not found' });
    res.json(results[0]);
  });
};

// ✅ GET total categories count
exports.getCategoryCount = (req, res) => {
  db.query('SELECT COUNT(*) AS total FROM categories', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ total: results[0].total });
  });
};

// ✅ CREATE category
exports.createCategory = (req, res) => {
  const {
    name, slug, icon, title, short_description, heading, long_description,
    feature_image, more_information, paper_stock, printing_methods,
    inks_variations, add_ons, coatings, stock_gallery, printing_gallery,
    inks_gallery, add_ons_gallery, coatings_gallery, alt, status,
    customizaton_title, customizaton_short_des, customizaton_long_desc,
    faqs, meta_title, meta_description, meta_keywords, created_by
  } = req.body;

  // Auto-generate slug if missing
  const finalSlug = slug || name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

  const sql = `
    INSERT INTO categories (
      name, slug, icon, title, short_description, heading, long_description,
      feature_image, more_information, paper_stock, printing_methods,
      inks_variations, add_ons, coatings, stock_gallery, printing_gallery,
      inks_gallery, add_ons_gallery, coatings_gallery, alt, status,
      customizaton_title, customizaton_short_des, customizaton_long_desc,
      faqs, meta_title, meta_description, meta_keywords, created_by, created_at
    )
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,NOW())
  `;

  db.query(sql, [
    name, finalSlug, icon, title, short_description, heading, long_description,
    feature_image, more_information, paper_stock, printing_methods,
    inks_variations, add_ons, coatings, stock_gallery, printing_gallery,
    inks_gallery, add_ons_gallery, coatings_gallery, alt, status,
    customizaton_title, customizaton_short_des, customizaton_long_desc,
    faqs, meta_title, meta_description, meta_keywords, created_by
  ], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Category created successfully', id: result.insertId });
  });
};

// ✅ UPDATE category
exports.updateCategory = (req, res) => {
  const {
    name, slug, icon, title, short_description, heading, long_description,
    feature_image, more_information, paper_stock, printing_methods,
    inks_variations, add_ons, coatings, stock_gallery, printing_gallery,
    inks_gallery, add_ons_gallery, coatings_gallery, alt, status,
    customizaton_title, customizaton_short_des, customizaton_long_desc,
    faqs, meta_title, meta_description, meta_keywords, updated_by
  } = req.body;

  const finalSlug = slug || name?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

  const sql = `
    UPDATE categories SET
      name=?, slug=?, icon=?, title=?, short_description=?, heading=?, long_description=?,
      feature_image=?, more_information=?, paper_stock=?, printing_methods=?,
      inks_variations=?, add_ons=?, coatings=?, stock_gallery=?, printing_gallery=?,
      inks_gallery=?, add_ons_gallery=?, coatings_gallery=?, alt=?, status=?,
      customizaton_title=?, customizaton_short_des=?, customizaton_long_desc=?,
      faqs=?, meta_title=?, meta_description=?, meta_keywords=?, updated_by=?, updated_at=NOW()
    WHERE id=?
  `;

  db.query(sql, [
    name, finalSlug, icon, title, short_description, heading, long_description,
    feature_image, more_information, paper_stock, printing_methods,
    inks_variations, add_ons, coatings, stock_gallery, printing_gallery,
    inks_gallery, add_ons_gallery, coatings_gallery, alt, status,
    customizaton_title, customizaton_short_des, customizaton_long_desc,
    faqs, meta_title, meta_description, meta_keywords, updated_by, req.params.id
  ], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category updated successfully' });
  });
};

// ✅ DELETE category
exports.deleteCategory = (req, res) => {
  db.query('DELETE FROM categories WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  });
};
