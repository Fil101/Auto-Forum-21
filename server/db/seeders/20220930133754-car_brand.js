const brendTopArr = [
  'Audi', 'BMW', 'Chery',
  'Chevrolet', 'Citroen', 'Daewoo',
  'Ford', 'Geely',
  'Haval', 'Honda', 'Hyundai',
  'Infiniti', 'Jeep', 'Kia',
  'VAZ (Lada)', 'Land Rover', 'Lexus',
  'Mazda', 'Mercedes-Benz',
  'Mitsubishi', 'Nissan', 'Opel',
  'Peugeot', 'Porsche', 'Renault',
  'Skoda', 'Subaru', 'Suzuki',
  'Toyota', 'Volkswagen',
  'Volvo', 'GAZ', 'UAZ'];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Car_brands', brendTopArr.map((brand) => ({
      name: brand,
      logo: `/IMG/Logo/${brand}.png`,
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Car_brands', null, {});
  },
};
