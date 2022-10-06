module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Александр',
      email: 'alex@alex',
      password: '123',
    },
    {
      name: 'Юля',
      email: 'julya@julya',
      password: '1234',
    },
    {
      name: 'Адам',
      email: 'adam@adam',
      password: '12345',
    },
    {
      name: 'Lena',
      email: 'l@l',
      password: '123456',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
