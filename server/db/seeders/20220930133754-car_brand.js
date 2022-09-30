const brendTopArr = [
  'Audi', 'BMW', 'Chery',
  'Chevrolet', 'Citroen', 'Daewoo',
  'EXEED', 'Ford', 'Geely',
  'Haval', 'Honda', 'Hyundai',
  'Infiniti', 'Jeep', 'Kia',
  'LADA (ВАЗ)', 'Land-Rover', 'Lexus',
  'Mazda', 'Mercedes-Benz',
  'Mitsubishi', 'Nissan', 'Opel',
  'Peugeot', 'Porsche', 'Renault',
  'Skoda', 'Subaru', 'Suzuki',
  'Toyota', 'Volkswagen',
  'Volvo', 'ГАЗ', 'УАЗ'];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Car_brands', brendTopArr.map((brand) => ({
      name: brand,
      logo: `/Logo/${brand}.png`,
    })), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Car_brands', null, {});
  },
};
