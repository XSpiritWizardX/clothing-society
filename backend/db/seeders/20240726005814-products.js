'use strict';
const {Product} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Product.bulkCreate([
      {
       ownerId: 6,
       name: 't-shirt',
       description: 's,  to XXL white t-shirt',
       price: 25.00
      },
      {
        ownerId: 4,
        name: 'pants',
        description: 's to XXL pants',
        price: 25.00
       },
       {
        ownerId: 6,
        name: 'hat',
        description: 'white hat medium size',
        price: 100.00
       },
       {
        ownerId: 3,
        name: 'shoes',
        description: 'size 6- 13 mens whites shoes',
        price: 100.00
       },
       {
        ownerId: 5,
        name: 'watch',
        description: 'white diamond mens watch',
        price: 1000.00
       },
       {
        ownerId: 1,
        name: 'underwear',
        description: 'white satin silk underwear',
        price: 18.95
       },
       {
        ownerId: 2,
        name: 'socks',
        description: 'white socks ',
        price: 9.99
       },


    ], { validate: true, });
  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Products';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: [1,4] }
    }, {});

  }
};
