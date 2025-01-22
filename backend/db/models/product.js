'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
            Product.belongsTo(
            models.User,
              { foreignKey: 'ownerId' }
          );
          Product.hasMany(
            models.Review,
              { foreignKey:'productId', onDelete: 'CASCADE' }
             );
             Product.hasMany(
              models.ProductImage,
                { foreignKey:'productId', onDelete: 'CASCADE' }
               );
              


    }
  }
  Product.init({
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
