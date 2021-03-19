const express = require('express');
const router = express.Router();
const wondersCtrl = require('../controllers/wonders');

router.get('/new', wondersCtrl.new);
router.post('/', wondersCtrl.create);

module.exports = router;