'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductImage.belongsTo(
        models.Product,
          { foreignKey: 'productId', onDelete: "Cascade"}
      );

    }
  }
  ProductImage.init({
    productId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    preview: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ProductImage',
  });
  return ProductImage;
};
