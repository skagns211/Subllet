"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Services", [
      {
        title: "넷플릭스",
        message: "영상 플랫폼",
        inner_image: "inner_image.jpg",
        outer_image: "outer_image.jpg",
        category: "video",
        url: "url.com",
        demo: true,
        total_comments: 0,
        total_likes: 0,
        total_scraps: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "왓챠",
        message: "영상 플랫폼",
        inner_image: "inner_image.jpg",
        outer_image: "outer_image.jpg",
        category: "video",
        url: "url.com",
        demo: false,
        total_comments: 0,
        total_likes: 0,
        total_scraps: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
