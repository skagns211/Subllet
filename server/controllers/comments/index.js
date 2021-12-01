const { Comment } = require("../../models");

module.exports = {
  comment: {
    post: async (req, res) => {
      const service_id = req.params.serviceId;
      // user_id는 accessToken으로 받아올 예정
      const { user_id, message, likes } = req.body;

      if (!message || !likes) {
        return res.status(400).send("Empty body");
      }

      const isExist = await Comment.findOne({
        where: {
          user_id,
          service_id,
        },
      });

      if (isExist) {
        return res.status(400).send("Already written");
      }

      const created = await Comment.create({
        user_id,
        service_id,
        message,
        likes,
      });

      // const count = await Comment.count({
      //   where: { service_id },
      // });

      // await Service.update({
      //   total_comments: count,
      //   where: { id: service_id },
      // });

      const comment = await Comment.findOne({
        attributes: ["id", "message", "likes", "createdAt"],
        where: { id: created.id },
      });

      try {
        return res.status(201).json({ comment });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    delete: async (req, res) => {
      const id = req.params.id;

      try {
        await Comment.destroy({
          where: { id },
        });

        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
