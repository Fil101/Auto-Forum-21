module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Car_models', [{
      name: 'John Doe',
      isBetaMember: false,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Car_models', null, {});
  },
};
