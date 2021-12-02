const { Subscribe, Service } = require("../../Models");

module.exports = {
  subscribe: {
    get: async (req, res) => {
      // 포스트맨으로 확인하기 위해 route에 /:id 추가함. 이후 삭제해야 함.
      const user_id = req.params.id;

      const subscribes = await Subscribe.findAll({
        attributes: ["id", "paydate", "planname", "planprice"],
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
      // user_id는 포스트맨 확인용
      const { user_id, paydate, planname, planprice } = req.body;

      if (!user_id || !planname || !planprice) {
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
        attributes: ["paydate", "planname", "planprice"],
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
      const id = req.params.id;
      const { paydate, planname, planprice } = req.body;

      if (!planname || !planprice) {
        return res.status(400).send("Empty body");
      }

      const updated = await Subscribe.update(
        {
          paydate,
          planname,
          planprice,
        },
        {
          where: { id },
        }
      );

      const subscribe = await Subscribe.findOne({
        attributes: ["paydate", "planname", "planprice"],
        where: { id: updated[0] },
      });

      try {
        return res.json({ subscribe });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    delete: async (req, res) => {
      const id = req.params.id;

      await Subscribe.destroy({
        where: { id },
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
