const { Sequelize , DataTypes } = require('sequelize');
const {sequelize} = require('../config');
const User = require('./usersModel');

const Faq = sequelize.define('Faq', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  question: { type: DataTypes.TEXT, allowNull: false },
  answer: { type: DataTypes.TEXT, allowNull: false },
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 0 },
  date: { type: DataTypes.DATEONLY, allowNull: false }, // ✅ DATE → DATEONLY
  created_by: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_by: { type: DataTypes.INTEGER, allowNull: false },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
}, {
  tableName: 'faqs',
  timestamps: false,
});

// ✅ Relations
Faq.belongsTo(User, { foreignKey: 'created_by', as: 'createdUser' });
Faq.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedUser' });

module.exports = Faq;