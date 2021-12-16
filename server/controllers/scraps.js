const { Scrap, Service } = require("../models");

module.exports = {
  scrap: {
    get: async (req, res) => {
      const user_id = req.id;

      const services = await Scrap.findAll({
        where: { user_id },
      });

      const servicesId = services.map((el) => el.dataValues.service_id);

      const scraps = [];

      for (const service of servicesId) {
        scraps.push(
          await Service.findOne({
            attributes: ["id", "outer_image"],
            where: { id: service },
          })
        );
      }

      try {
        return res.json({ scraps });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    post: async (req, res) => {
      const user_id = req.id;
      const service_id = req.params.serviceId;

      await Scrap.findOrCreate({
        where: {
          user_id,
          service_id,
        },
      });

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
      const user_id = req.id;
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
  isScrap: {
    get: async (req, res) => {
      const user_id = req.id;
      const service_id = req.params.serviceId;

      const scrap = await Scrap.findOne({
        where: { user_id, service_id },
      });

      let isScrap;

      if (scrap) {
        isScrap = true;
      } else {
        isScrap = false;
      }

      try {
        return res.json({ isScrap });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
