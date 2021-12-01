const { User } = require("../../models");
const {
  generateSalt,
  hashPassword,
  checkPassword,
} = require("../../utils/secure");

module.exports = {
  password: {
    patch: async (req, res) => {
      const { password, newPassword } = req.body;

      if (!password || !newPassword) {
        res.status(400).send("Empty body");
      }
      // accessToken을 verify해서 데이터베이스의 값을 가져와 비교
      // const result = checkPassword(password, )

      if (!result) {
        return res.status(400).send("Inconsistency");
      }

      const salt = generateSalt();
      const hashedPassword = hashPassword(newPassword, salt);

      try {
        await User.update({
          password: hashedPassword,
          salt,
        });
        return res.status(201).send("Success");
      } catch (err) {
        console.error(err);
        return res.status(500).send("Server error");
      }
    },
  },
  user: {
    patch: async (req, res) => {
      // 실제 id는 accessToken에서 가져올 것.
      const { id, nickname, profile } = req.body;

      if (!nickname || !profile) {
        return res.status(400).send("Empty body");
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
      const { password } = req.body;

      if (!password) {
        return res.status(400).send("Empty body");
      }

      // accessToken을 verify해서 데이터베이스의 값을 가져와 비교
      // const result = checkPassword(password, )

      if (!result) {
        return res.status(400).send("Inconsistency");
      }

      try {
        await User.destory({
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
