const { Service, Comment } = require("../../models");

module.exports = {
  services: {
    get: async (req, res) => {
      const services = await Service.findAll({
        attributes: [
          "id",
          "title",
          "message",
          "outer_image",
          "category",
          "demo",
        ],
      });

      try {
        res.json({ services });
      } catch (err) {
        res.status(500).send("Server Error");
      }
    },
  },
  service: {
    get: async (req, res) => {
      const id = req.params.id;

      const service = await Service.findOne({
        attributes: ["inner_image", "url", "total_comments", "total_likes"],
        where: { id },
        include: {
          attributes: ["id", "message", "likes", "createdAt", "updatedAt"],
          model: Comment,
        },
      });

      try {
        return res.json({ service });
      } catch (err) {
        return res.status(500).json("Server Error");
      }
    },
  },
};
