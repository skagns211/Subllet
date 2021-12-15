const { User } = require("../models");
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

      const result = checkPassword(password, findUser.password);

      if (!result) {
        return res.status(400).send("Inconsistency");
      }

      try {
        await User.destroy({
          where: { id },
        });
        return res.status(204).send("Success");
      } catch (err) {
        console.error(err);
      }
    },
  },
  nickname: {
    post: async (req, res) => {
      const { nickname } = req.body;

      if (!nickname) {
        return res.status(400).send("Empty body");
      }

      const isNickname = await User.findOne({
        where: { nickname },
      });

      if (isNickname) {
        return res.status(400).send("Overlap");
      }

      try {
        return res.send("Ok");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
};
