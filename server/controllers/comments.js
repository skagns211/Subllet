const { Comment } = require("../models");

module.exports = {
  comment: {
    post: async (req, res) => {
      const service_id = req.params.serviceId;
      const user_id = req.id;
      const { commenter, message, likes } = req.body;

      if (!commenter || !message || !likes) {
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
        commenter,
        message,
        likes,
      });

      const comment = await Comment.findOne({
        attributes: ["id", "commenter", "message", "likes", "createdAt"],
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
      const user_id = req.id
      const service_id = req.params.id;

      try {
        await Comment.destroy({
          where: { user_id, service_id },
        });

        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
