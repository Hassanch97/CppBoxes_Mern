const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config');
const User = require('./usersModel');

const Blogs = sequelize.define('Blog', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  feature_image: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING }, // could also be FK later if needed
  description: { type: DataTypes.TEXT('long') },
  tags: { type: DataTypes.TEXT },
  author: { type: DataTypes.INTEGER }, // relates to users table if you have one
  faqs: { type: DataTypes.TEXT },
  related_stories: { type: DataTypes.TEXT },
  seo_land: { type: DataTypes.TEXT },
  shortcode: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
  meta_title: { type: DataTypes.TEXT },
  meta_keywords: { type: DataTypes.TEXT },
  meta_description: { type: DataTypes.TEXT },
  created_by: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_by: { type: DataTypes.INTEGER, allowNull: false },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
}, {
  tableName: 'blogs',
  timestamps: false,
});

// ✅ Relations
Blogs.belongsTo(User, { foreignKey: 'created_by', as: 'createdUser' });
Blogs.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedUser' });

module.exports = Blogs;
