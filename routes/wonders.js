const express = require('express');
const router = express.Router();
const wondersCtrl = require('../controllers/wonders');

router.get('/new', wondersCtrl.new);
router.post('/', wondersCtrl.create);
router.get('/historywonders/:id', wondersCtrl.show);

module.exports = router;