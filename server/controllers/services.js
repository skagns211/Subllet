const { Service, Comment, Price, Scrap } = require("../models");
const { comment } = require("./comments");

module.exports = {
  service: {
    get: async (req, res) => {
      const service = await Service.findAll({
        include: [
          {
            model: Price,
          },
        ],
      });

      const comment = await Service.findAll({
        attributes: [],
        include: [
          {
            model: Comment,
          },
        ],
      });

      const services = service.map((el) => el.dataValues);
      const comments = comment.map((el) => el.dataValues);

      for (let i = 0; i < services.length; i++) {
        services[i].comments = comments[i].Comments;
      }

      try {
        return res.json({ services });
      } catch (err) {
        console.error(err);
        return res.status(500).json("Server error");
      }
    },
  },

  // services: {
  //   get: async (req, res) => {
  //     const services = await Service.findAll({
  //       attributes: ["id", "title", "outer_image", "category", "demo"],
  //       include: [
  //         {
  //           attributes: ["id", "title", "message", "price"],
  //           model: Price,
  //         },
  //       ],
  //     });

  //     try {
  //       res.json({ services });
  //     } catch (err) {
  //       console.error(err);
  //       res.status(500).send("Server error");
  //     }
  //   },
  // },
  // service: {
  //   get: async (req, res) => {
  //     const id = req.params.id;

  //     const service = await Service.findOne({
  //       attributes: [
  //         "message",
  //         "inner_image",
  //         "url",
  //         "total_comments",
  //         "total_likes",
  //       ],
  //       where: { id },
  //       include: {
  //         attributes: [
  //           "id",
  //           "commenter",
  //           "message",
  //           "likes",
  //           "createdAt",
  //           "updatedAt",
  //         ],
  //         model: Comment,
  //       },
  //     });

  //     const scrapNum = await Scrap.count({
  //       where: { service_id: id },
  //     });

  //     const price = await Service.findOne({
  //       attributes: [],
  //       where: { id },
  //       include: {
  //         attributes: ["id", "title", "message", "price"],
  //         model: Price,
  //       },
  //     });

  //     service.dataValues.scrapNum = scrapNum;
  //     service.dataValues.prices = price.dataValues.Prices;

  //     try {
  //       return res.json({ service });
  //     } catch (err) {
  //       console.error(err);
  //       return res.status(500).json("Server error");
  //     }
  //   },
  // },
};
