// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//these are your associations

// Products belongsTo Category  One-To-Many 
Product.belongsTo(Category, {
})
// Categories have many Products  One-To-Many
Category.hasMany(Product)
// Products belongToMany Tags (through ProductTag) Many-To-Many
Product.belongsToMany(Tag,{
  through: 'ProductTag'
})
// Tags belongToMany Products (through ProductTag)   Many-To-Many
Tag.belongsToMany(Product, {
  through: 'ProductTag'
})


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
