const { Sequelize , DataTypes } = require('sequelize');
const {sequelize} = require('../config');
const User = require('./usersModel');

const BlogCategory = sequelize.define('BlogCategory', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  icon: { type: DataTypes.STRING, defaultValue: 'rigid-icon.svg' },
  title: { type: DataTypes.STRING },
  short_description: { type: DataTypes.TEXT },
  heading: { type: DataTypes.TEXT },
  long_description: { type: DataTypes.TEXT('long') },
  feature_image: { type: DataTypes.STRING },
  alt: { type: DataTypes.STRING },
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
  customizaton_title: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Boxes Limitless Customizations' },
  customizaton_short_des: { type: DataTypes.TEXT },
  customizaton_long_desc: { type: DataTypes.TEXT('long') },
  faqs: { type: DataTypes.STRING },
  meta_title: { type: DataTypes.TEXT },
  meta_description: { type: DataTypes.TEXT },
  meta_keywords: { type: DataTypes.TEXT },
  created_by: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_by: { type: DataTypes.INTEGER, allowNull: false },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
}, {
  tableName: 'blog_categories',
  timestamps: false,
});

// ✅ Relations
BlogCategory.belongsTo(User, { foreignKey: 'created_by', as: 'createdUser' });
BlogCategory.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedUser' });

module.exports = BlogCategory;