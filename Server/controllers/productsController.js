const db = require('../db');

// GET all products with category info
exports.getAllProducts = (req, res) => {
  const query = `
    SELECT 
      p.id, p.name, p.breadcrumb_title, p.add_schema, p.slug, 
      p.feature_image, p.alt, p.category, p.short_description, 
      p.long_description, p.key_features, p.specifications, 
      p.paper_stock, p.printing_methods, p.inks_variations, 
      p.add_ons, p.coatings, p.stock_gallery, p.printing_gallery, 
      p.inks_gallery, p.add_ons_gallery, p.coatings_gallery, 
      p.faqs, p.status, p.meta_title, p.meta_description, 
      p.meta_keywords, p.created_at, p.created_by, 
      p.updated_at, p.updated_by,
      c.name AS category_name, c.slug AS category_slug, c.icon AS category_icon
    FROM products p
    LEFT JOIN categories c ON p.category = c.id
  `;
  
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// GET product by ID with category info
exports.getProductById = (req, res) => {
  const query = `
    SELECT 
      p.id, p.name, p.breadcrumb_title, p.add_schema, p.slug, 
      p.feature_image, p.alt, p.category, p.short_description, 
      p.long_description, p.key_features, p.specifications, 
      p.paper_stock, p.printing_methods, p.inks_variations, 
      p.add_ons, p.coatings, p.stock_gallery, p.printing_gallery, 
      p.inks_gallery, p.add_ons_gallery, p.coatings_gallery, 
      p.faqs, p.status, p.meta_title, p.meta_description, 
      p.meta_keywords, p.created_at, p.created_by, 
      p.updated_at, p.updated_by,
      c.name AS category_name, c.slug AS category_slug, c.icon AS category_icon
    FROM products p
    LEFT JOIN categories c ON p.category = c.id
    WHERE p.id = ?
  `;

  db.query(query, [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
};

// CREATE product
exports.createProduct = (req, res) => {
  const productData = req.body;
  db.query('INSERT INTO products SET ?', productData, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Product created successfully', id: result.insertId });
  });
};

// UPDATE product
exports.updateProduct = (req, res) => {
  const productData = req.body;
  db.query('UPDATE products SET ? WHERE id = ?', [productData, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully' });
  });
};

// DELETE product
exports.deleteProduct = (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  });
};
