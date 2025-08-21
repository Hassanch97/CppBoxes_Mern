const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config');


// ✅ User model
const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  full_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  comments: { type: DataTypes.STRING(222), allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  created_by: { type: DataTypes.INTEGER, allowNull: false },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_by: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
