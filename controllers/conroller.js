const { sequelize, User } = require("../models/User");
const path = require("path");

exports.createUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  const user = await User.create({ name: name, email: email, phone: phone });
  res.send(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  console.log(users);
  res.send(users);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.send(`User with ID ${id} deleted`);
};

exports.home = (req, res) => {
  res.send("Home page");
};

exports.about = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/booking.html"));
};
