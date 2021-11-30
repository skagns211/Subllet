const { Service, Comment, Price } = require("../../models");

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
        console.error(err);
        res.status(500).send("Server error");
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

      const price = await Price.findAll({
        where: { service_id: id },
      });

      // console.log(service.dataValues.assign(...(price.map((el) => el.dataValues))))
      // const a = service[0].assign(...(price.map((el) => el.dataValues)))

      const a = [service, ...price.map((el) => el.dataValues)];

      try {
        return res.json({ a });
      } catch (err) {
        console.error(err);
        return res.status(500).json("Server error");
      }
    },
  },
};
