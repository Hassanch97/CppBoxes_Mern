const { Sequelize , DataTypes } = require('sequelize');
const {sequelize} = require('../config');
const User = require('./usersModel');


// ✅ Product model
const Product = sequelize.define('Product', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  breadcrumb_title: { type: DataTypes.STRING, allowNull: true },
  add_schema: { type: DataTypes.TEXT, allowNull: true },
  slug: { type: DataTypes.STRING, allowNull: false },
  feature_image: { type: DataTypes.STRING, allowNull: true },
  alt: { type: DataTypes.STRING, allowNull: true },
  category: { type: DataTypes.STRING, allowNull: true },
  short_description: { type: DataTypes.TEXT, allowNull: true },
  long_description: { type: DataTypes.TEXT('long'), allowNull: true },
  key_features: { type: DataTypes.TEXT, allowNull: true },
  specifications: { type: DataTypes.TEXT, allowNull: true },
  paper_stock: { type: DataTypes.TEXT, allowNull: true },
  printing_methods: { type: DataTypes.TEXT, allowNull: true },
  inks_variations: { type: DataTypes.TEXT, allowNull: true },
  add_ons: { type: DataTypes.TEXT, allowNull: true },
  coatings: { type: DataTypes.TEXT, allowNull: true },
  stock_gallery: { type: DataTypes.STRING, allowNull: true },
  printing_gallery: { type: DataTypes.STRING, allowNull: true },
  inks_gallery: { type: DataTypes.STRING, allowNull: true },
  add_ons_gallery: { type: DataTypes.STRING, allowNull: true },
  coatings_gallery: { type: DataTypes.STRING, allowNull: true },
  variable1: { type: DataTypes.STRING(150), allowNull: true },
  variable2: { type: DataTypes.STRING(150), allowNull: true },
  variable3: { type: DataTypes.STRING(150), allowNull: true },
  variable4: { type: DataTypes.STRING(150), allowNull: true },
  variable5: { type: DataTypes.STRING(150), allowNull: true },
  variable6: { type: DataTypes.STRING(150), allowNull: true },
  variable7: { type: DataTypes.STRING(150), allowNull: true },
  variable8: { type: DataTypes.STRING(150), allowNull: true },
  variable9: { type: DataTypes.STRING(150), allowNull: true },
  variable10: { type: DataTypes.STRING(150), allowNull: true },
  faqs: { type: DataTypes.STRING, allowNull: true },
  status: { type: DataTypes.TINYINT, allowNull: false, defaultValue: 1 },
  meta_title: { type: DataTypes.TEXT, allowNull: true },
  meta_description: { type: DataTypes.TEXT, allowNull: true },
  meta_keywords: { type: DataTypes.TEXT, allowNull: true },
  created_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  created_by: { type: DataTypes.INTEGER, allowNull: false },
  updated_at: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
  updated_by: { type: DataTypes.INTEGER, allowNull: false },
}, {
  tableName: 'products',
  timestamps: false,
});

// // ✅ Relations
Product.belongsTo(User, { foreignKey: 'created_by', as: 'createdUser' });
Product.belongsTo(User, { foreignKey: 'updated_by', as: 'updatedUser' });


module.exports = Product;
