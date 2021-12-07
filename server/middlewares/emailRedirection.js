const { User } = require("../models");
const { generateEmailKey } = require("../utils/secure");
const emailSend = require("../utils/emails/send");
const { emailVerify } = require("../utils/emails/content");

const emailRedirection = async (req, res) => {
  const id = req.id;

  const findUser = await User.findOne({
    where: { id },
  });

  if (!findUser) {
    return res.status(404).send("Not found");
  }

  const { email, nickname } = findUser;
  const emailKey = await generateEmailKey();

  await User.update(
    {
      email_key: emailKey,
    },
    {
      where: { id },
    }
  );

  const url = process.env.SERVER_ORIGIN + "/auth/confirm/email?key=" + emailKey;

  const emailContent = emailVerify(email, nickname, url);
  emailSend(emailContent);

  try {
    res.status(201).send("Resended");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

module.exports = emailRedirection;
