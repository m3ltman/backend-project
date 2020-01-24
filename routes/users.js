/* eslint-disable linebreak-style */
const users = require('../data/users.json');

const sendAllUsers = (req, res) => {
  res.send(users);
}

const sendUser = (req, res) => {
  res.send(users[req.params.id]);
}

module.exports = {
  sendAllUsers,
  sendUser,
}