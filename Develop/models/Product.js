// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;


// {
//   product_name: 'Plain T-Shirt',
//   price: 14.99,
//   stock: 14,
//   category_id: 1,
// },