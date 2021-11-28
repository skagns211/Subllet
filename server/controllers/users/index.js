const { User } = require("../../models");

module.exports = {
  password: {
    patch: async (req, res) => {
      const { password, newPassword } = req.body;

      if (!password || !newPassword) {
        res.send("Empty body");
      }
    },
  },
  user: {
    patch: async (req, res) => {
      const { id, nickname, profile } = req.body;

      if (!nickname || !profile) {
        res.send("Empty body");
      } else {
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
          res.status(201).json({ userInfo });
        } catch (err) {
          res.status(500).send("Server Error");
        }
      }
    },
    post: async (req, res) => {
      const { password } = req.body;

      if (!password) {
        res.send("");
      }
    },
  },
  nickname: {
    post: async (req, res) => {
      const { nickname } = req.body;

      if (!nickname) {
        res.send("Empty body");
      } else {
        try {
          const isNickname = await User.findOne({
            where: { nickname },
          });

          if (isNickname) {
            res.send("Overlap");
          } else {
            res.send("OK");
          }
        } catch (err) {
          res.status(500).send("Server Error");
        }
      }
    },
  },
};
