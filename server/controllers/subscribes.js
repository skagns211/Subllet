const { Subscribe, Service } = require("../models");

module.exports = {
  subscribe: {
    get: async (req, res) => {
      const user_id = req.id;

      const subscribes = await Subscribe.findAll({
        attributes: ["id", "paydate", "planname", "planprice", "createdAt"],
        where: { user_id },
        include: [
          {
            model: Service,
            attributes: ["id", "title", "outer_image", "category"],
          },
        ],
      });

      try {
        return res.json({ subscribes });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    post: async (req, res) => {
      const service_id = req.params.serviceId;
      const user_id = req.id;

      const { paydate, planname, planprice } = req.body;

      if (!planname || !planprice) {
        return res.status(400).send("Empty body");
      }

      const checkSubscribe = await Subscribe.findOne({
        where: {
          user_id,
          service_id,
        },
      });

      if (checkSubscribe) {
        return res.status(400).send("Overlap");
      }

      const created = await Subscribe.create({
        user_id,
        service_id,
        paydate,
        planname,
        planprice,
      });

      const subscribe = await Subscribe.findOne({
        attributes: ["id", "paydate", "planname", "planprice", "createdAt"],
        where: { id: created.id },
        include: [
          {
            model: Service,
            attributes: ["id", "title", "outer_image", "category"],
          },
        ],
      });

      try {
        return res.status(201).json({ subscribe });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    patch: async (req, res) => {
      const user_id = req.id;
      const service_id = req.params.id;
      const { paydate, planname, planprice } = req.body;

      if (paydate) {
        await Subscribe.update(
          {
            paydate,
          },
          {
            where: { user_id, service_id },
          }
        );
      }

      if (planname && planprice) {
        await Subscribe.update(
          {
            planname,
            planprice,
          },
          {
            where: { user_id, service_id },
          }
        );
      }

      const subscribe = await Subscribe.findOne({
        attributes: ["paydate", "planname", "planprice"],
        where: { user_id, service_id },
      });

      try {
        return res.json({ subscribe });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    delete: async (req, res) => {
      const user_id = req.id;
      const service_id = req.params.id;

      await Subscribe.destroy({
        where: { user_id, service_id },
      });

      try {
        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
  isSubscribe: {
    get: async (req, res) => {
      const user_id = req.id;
      const service_id = req.params.serviceId;

      const subscribe = await Subscribe.findOne({
        where: {
          user_id,
          service_id,
        },
      });

      let isSubscribe;

      if (subscribe) {
        isSubscribe = true;
      } else {
        isSubscribe = false;
      }

      try {
        return res.json({ isSubscribe });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
