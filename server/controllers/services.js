const { User, Service, Comment, Price, Scrap } = require("../models");

module.exports = {
  services: {
    get: async (req, res) => {
      const services = await Service.findAll({
        attributes: [
          "id",
          "title",
          "outer_image",
          "total_likes",
          "category",
          "demo",
        ],
        include: [
          {
            attributes: ["id", "title", "message", "price"],
            model: Price,
          },
        ],
      });


      try {
        res.json({ services });
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
  },
  service: {
    get: async (req, res) => {
      const id = req.params.id;

      const service = await Service.findOne({
        attributes: ["title", "message", "inner_image", "total_likes", "url"],
        where: { id },
        include: {
          attributes: [
            "id",
            "user_id",
            "commenter",
            "message",
            "likes",
            "createdAt",
            "updatedAt",
          ],
          model: Comment,
        },
      });

      const scrapNum = await Scrap.count({
        where: { service_id: id },
      });

      const price = await Service.findOne({
        attributes: [],
        where: { id },
        include: {
          attributes: ["id", "title", "message", "price"],
          model: Price,
        },
      });

      const commentNum = await Comment.count({
        where: { service_id: id },
      });

      const total_unlikes = commentNum - service.total_likes;

      service.dataValues.total_unlikes = total_unlikes;
      service.dataValues.scrapNum = scrapNum;
      service.dataValues.prices = price.dataValues.Prices;

      try {
        return res.json({ service });
      } catch (err) {
        console.error(err);
        return res.status(500).json("Server error");
      }
    },
  },
};
