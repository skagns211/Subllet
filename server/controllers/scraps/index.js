const { Scrap, Service } = require("../../models");

module.exports = {
  scrap: {
    get: async (req, res) => {
      // 포스트맨용으로 route에 추가
      const user_id = req.params.id;

      const services = await Scrap.findAll({
        where: { user_id },
      });

      const servicesId = services.rows.map((el) => el.dataValues.service_id);

      const scraps = [];

      for (const service of servicesId) {
        scraps.push(
          await Service.findOne({
            attributes: ["outer_image"],
            where: { id: service },
          })
        );
      }

      try {
        res.json({ scraps });
      } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
      }
    },
    post: async (req, res) => {
      // user_id는 포스트맨용
      const { user_id } = req.body;
      const service_id = req.params.serviceId;

      await Scrap.findOrCreate({
        where: {
          user_id,
          service_id,
        },
      })

      const service = await Service.findOne({
        attributes: ["outer_image"],
        where: { id: service_id },
      });

      try {
        return res.status(201).json({ service });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    delete: async (req, res) => {
      // params에 user_id는 포스트맨용
      const service_id = req.params.serviceId;

      await Scrap.destroy({
        where: {
          user_id,
          service_id,
        },
      });

      try {
        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
