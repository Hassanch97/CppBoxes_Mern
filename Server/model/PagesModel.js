const { Sequelize , DataTypes } = require('sequelize');
const {sequelize} = require('../config');
const User = require('./usersModel');

const Pages = sequelize.define('Page', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  top_heading: { type: DataTypes.TEXT('long') },
  top_description: { type: DataTypes.TEXT },
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
  meta_title: { type: DataTypes.TEXT },
  meta_description: { type: DataTypes.TEXT },
  meta_keywords: { type: DataTypes.TEXT },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  created_by: { type: DataTypes.INTEGER, allowNull: false },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_by: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'pages',
  timestamps: false,
});

// ✅ Relations
Pages.belongsTo(User, { foreignKey: 'created_by', as: 'createdUser' });
Pages.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedUser' });

module.exports = Pages;