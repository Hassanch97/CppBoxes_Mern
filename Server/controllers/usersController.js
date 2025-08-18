const db = require('../db');
const bcrypt = require('bcrypt');

// GET all users
exports.getAllUsers = (req, res) => {
  db.query('SELECT id, full_name, email, phone, comments, role, status, created_at, created_by, updated_at, updated_by FROM users', 
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
};

// GET user by ID
exports.getUserById = (req, res) => {
  db.query(
    'SELECT id, full_name, email, phone, comments, role, status, created_at, created_by, updated_at, updated_by FROM users WHERE id = ?', 
    [req.params.id], 
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'User not found' });
      res.json(results[0]);
    }
  );
};

// CREATE user
exports.createUser = async (req, res) => {
  try {
    const { full_name, email, phone, password, comments, role, status, created_by } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      full_name,
      email,
      phone,
      password: hashedPassword,
      comments,
      role,
      status,
      created_at: new Date(),
      created_by
    };

    db.query('INSERT INTO users SET ?', userData, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'User created successfully', id: result.insertId });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE user
exports.updateUser = (req, res) => {
  const userData = req.body;

  // If password provided, hash it before updating
  if (userData.password) {
    bcrypt.hash(userData.password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ error: err.message });
      userData.password = hashedPassword;

      db.query('UPDATE users SET ? WHERE id = ?', [userData, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User updated successfully' });
      });
    });
  } else {
    db.query('UPDATE users SET ? WHERE id = ?', [userData, req.params.id], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
      res.json({ message: 'User updated successfully' });
    });
  }
};

// DELETE user
exports.deleteUser = (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  });
};
