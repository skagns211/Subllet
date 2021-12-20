const { User, Service, Comment, Subscribe, Scrap } = require("../models");
const {
  generateSalt,
  hashPassword,
  checkPassword,
} = require("../utils/secure");

module.exports = {
  password: {
    patch: async (req, res) => {
      const id = req.id;
      const { password, newPassword } = req.body;

      if (!password || !newPassword) {
        res.status(400).send("Empty body");
      }

      const findUser = await User.findOne({
        where: { id },
      });

      const result = await checkPassword(
        password,
        findUser.dataValues.password
      );

      if (!result) {
        return res.status(400).send("Inconsistency");
      }

      const salt = await generateSalt();
      const hashedPassword = await hashPassword(newPassword, salt);

      await User.update(
        {
          password: hashedPassword,
        },
        {
          where: { id },
        }
      );

      try {
        return res.status(201).send("Success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
  user: {
    patch: async (req, res) => {
      const id = req.id;
      const { nickname, profile } = req.body;

      const findUser = await User.findOne({
        where: { nickname },
      });

      if (findUser) {
        if (findUser.id !== id) {
          return res.status(400).send("Overlap");
        }
      }

      await User.update(
        {
          nickname,
          profile,
        },
        {
          where: { id },
        }
      );

      const userInfo = await User.findOne({
        attributes: ["nickname", "profile"],
        where: { id },
      });

      try {
        return res.status(201).json({ userInfo });
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
    post: async (req, res) => {
      const id = req.id;
      const { password } = req.body;

      if (!password) {
        return res.status(400).send("Empty body");
      }

      const findUser = await User.findOne({
        where: { id },
      });

      const result = await checkPassword(password, findUser.password);

      if (!result) {
        return res.status(400).send("Inconsistency");
      }

      const subscribe = await Subscribe.findOne({
        where: { user_id: id },
      });

      if (subscribe) {
        await Subscribe.destroy({
          where: { user_id: id },
        });
      }

      const scrap = await Scrap.findOne({
        where: { user_id: id },
      });

      if (scrap) {
        await Scrap.destroy({
          where: { user_id: id },
        });
      }

      const comment = await Comment.findOne({
        where: { user_id: id },
      });

      if (comment) {
        const service = await Service.findOne({
          where: { id: comment.service_id },
        });

        if (comment.likes === true) {
          await Service.update(
            {
              total_likes: service.total_likes - 1,
            },
            {
              where: { id: service.id },
            }
          );
        }
        await Comment.destroy({
          where: { user_id: id },
        });
      }

      await User.destroy({
        where: { id },
      });

      try {
        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
