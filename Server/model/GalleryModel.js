const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Gallery = sequelize.define('Gallery', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  image: { type: DataTypes.STRING, allowNull: false }, // image filename/path
  alt_tag: { type: DataTypes.STRING },                 // alt text
  link: { type: DataTypes.STRING },                    // optional link
  detail: { type: DataTypes.TEXT },                    // image description
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  created_by: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'galleries',
  timestamps: false,
});

module.exports = Gallery;
