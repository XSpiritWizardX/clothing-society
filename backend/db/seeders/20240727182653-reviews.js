'use strict';
const {Review} = require("../models")

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([

      {
        productId: 1,
        userId: 3,
        review: 'comfy t-shirt. i love it',
        stars: 5,
        createdAt:Date.now(),
        updatedAt:Date.now()
       },
       {
         productId: 2,
         userId: 2,
         review: 'comfy jeans.',
         stars: 4,
         createdAt:Date.now(),
         updatedAt:Date.now()
        },
        {
          productId: 3,
          userId: 1,
          review: 'this hat sucks',
          stars: 1,
          createdAt:Date.now(),
          updatedAt:Date.now()
         },
         {
          productId: 4,
          userId: 5,
          review: 'I LOVE IT ',
          stars: 5,
          createdAt:Date.now(),
          updatedAt:Date.now()
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
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      productId: { [Op.in]: [1,4] },
      userId: { [Op.in]: [1,4] },
    }, {});

  }
};
