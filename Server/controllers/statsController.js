const db = require('../db');

exports.getCounts = (req, res) => {
  const sql = `
    SELECT 
      (SELECT COUNT(*) FROM categories) AS totalCategories,
      (SELECT COUNT(*) FROM products) AS totalProducts,
      (SELECT COUNT(*) FROM portfolio_images) AS totalPortfolio,
      (SELECT COUNT(*) FROM reviews) AS totalReviews
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};
