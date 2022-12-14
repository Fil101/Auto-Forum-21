module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Like_posts', [{
      user_id: '1',
      post_id: '1',
    },
    {
      user_id: '1',
      post_id: '3',
    },
    {
      user_id: '2',
      post_id: '1',
    },
    {
      user_id: '2',
      post_id: '2',
    },
    {
      user_id: '2',
      post_id: '4',
    },
    {
      user_id: '3',
      post_id: '1',
    },
    {
      user_id: '3',
      post_id: '2',
    },
    {
      user_id: '4',
      post_id: '1',
    },
    {
      user_id: '4',
      post_id: '3',
    },
    {
      user_id: '4',
      post_id: '4',
    },
    {
      user_id: '5',
      post_id: '1',
    },
    {
      user_id: '5',
      post_id: '3',
    },
    {
      user_id: '6',
      post_id: '1',
    },
    {
      user_id: '6',
      post_id: '2',
    },
    {
      user_id: '6',
      post_id: '3',
    },
    {
      user_id: '6',
      post_id: '4',
    },
    {
      user_id: '7',
      post_id: '2',
    },
    {
      user_id: '7',
      post_id: '3',
    },
    {
      user_id: '7',
      post_id: '4',
    },
    {
      user_id: '8',
      post_id: '1',
    },
    {
      user_id: '8',
      post_id: '2',
    },
    {
      user_id: '8',
      post_id: '4',
    },
    {
      user_id: '9',
      post_id: '2',
    },
    {
      user_id: '9',
      post_id: '3',
    },
    {
      user_id: '10',
      post_id: '1',
    },
    {
      user_id: '10',
      post_id: '2',
    },
    {
      user_id: '10',
      post_id: '4',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Like_posts', null, {});
  },
};
