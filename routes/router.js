/* eslint-disable linebreak-style */
const router = require('express').Router();
const users = require('./users');
const cards = require('./cards');

router.get('/users', users.sendAllUsers);
router.get('/users/:id', users.sendUser);
router.get('/cards', cards);

module.exports = router;
