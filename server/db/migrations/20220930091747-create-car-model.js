module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Car_models', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      img: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      banner: {
        type: Sequelize.TEXT,
      },
      car_brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Car_brands',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Car_models');
  },
};
