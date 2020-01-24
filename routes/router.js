/* eslint-disable linebreak-style */
const router = require('express').Router();
const users = require('./users');
const cards = require('./cards');

router.get('/users', users.sendAllUsers);
router.get('/cards', cards);
router.get('/users/:id', users.sendUser);

module.exports = router;
