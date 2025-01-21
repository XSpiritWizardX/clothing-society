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
       name: 'Fire palace',
       description: 'stay in prince zukos room',
       price: 1000.00
      },
      {
        ownerId: 4,
        name: 'Southern Air Temple',
        description: 'stay the night in aangs old room',
        price: 1000.00
       },
       {
        ownerId: 6,
        name: 'Jasmine Dragon',
        description: 'stay in the jasmine dragon and visit uncle Iroh',
        price: 1000.00
       },
       {
        ownerId: 3,
        name: 'Secret Tunnels',
        description: 'Get lost and find love in the secret tunnels',
        price: 1000.00
       },
       {
        ownerId: 5,
        name: 'Kataras Home',
        description: 'Defend the southern water tribe from fire nation invaders',
        price: 1000.00
       },
       {
        ownerId: 1,
        name: 'Kyoshi Island',
        description: 'stay with the kyoshi warriors',
        price: 1000.00
       },
       {
        ownerId: 2,
        name: 'Master Swordsmith',
        description: 'stay and train under a legendary master swordsman',
        price: 1000.00
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
