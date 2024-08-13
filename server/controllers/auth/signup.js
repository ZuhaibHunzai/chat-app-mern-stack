const User = require("../../models/user");
const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  try {
    const { username, email, name, password } = req.body;
    if (!username || !email || !password || !name) {
      return res.status(400).json({
        message: "invalid payload",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHashed = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      name,
      password: passwordHashed,
    });
    res.status(200).json(user);
  } catch (err) {
    console.log("Error creating user", err);
  }
};
