// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category);
// Categories haveMany Products
Category.hasMany(Product);
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: 'product_tag'});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: 'product_tag'});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};