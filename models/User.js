const Sequelize = require("sequelize");

const sequelize = new Sequelize("express-node", "root", "Pj@8106228817", {
  dialect: "mysql",
  host: "localhost",
});

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  name: {
    type: Sequelize.STRING,
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
  },

  phone: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = { sequelize, User };
