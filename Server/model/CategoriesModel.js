const { Sequelize } = require('sequelize');

const { DataTypes } = require('sequelize');
const {sequelize} = require('../config');
const User = require('./usersModel');




// ✅ Category model (with relations)
const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  slug: { type: DataTypes.STRING, allowNull: false },
  icon: { type: DataTypes.STRING, defaultValue: 'rigid-icon.svg' },
  title: { type: DataTypes.STRING },
  short_description: { type: DataTypes.TEXT },
  heading: { type: DataTypes.TEXT },
  long_description: { type: DataTypes.TEXT('long') },
  feature_image: { type: DataTypes.STRING },
  more_information: { type: DataTypes.TEXT },
  paper_stock: { type: DataTypes.TEXT },
  printing_methods: { type: DataTypes.TEXT },
  inks_variations: { type: DataTypes.TEXT },
  add_ons: { type: DataTypes.TEXT },
  coatings: { type: DataTypes.TEXT },
  stock_gallery: { type: DataTypes.STRING },
  printing_gallery: { type: DataTypes.STRING },
  inks_gallery: { type: DataTypes.STRING },
  add_ons_gallery: { type: DataTypes.STRING },
  coatings_gallery: { type: DataTypes.STRING },
  alt: { type: DataTypes.STRING },
  status: { type: DataTypes.TINYINT, defaultValue: 1 },
  customizaton_title: { type: DataTypes.STRING, defaultValue: 'Boxes Limitless Customizations' },
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
  tableName: 'categories',
  timestamps: false,
});

// ✅ Relations
Category.belongsTo(User, { foreignKey: 'created_by', as: 'createdUser' });
Category.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedUser' });

User.hasMany(Category, { foreignKey: 'created_by', as: 'createdCategories' });
User.hasMany(Category, { foreignKey: 'updated_by', as: 'updatedCategories' });

module.exports = Category;
