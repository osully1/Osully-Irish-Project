const express = require('express');
const router = express.Router();
const wondersCtrl = require('../controllers/index');

router.get('/', wondersCtrl.index);
router.get('/wonders/natwonders', wondersCtrl.natwonders);
router.get('/wonders/historywonders', wondersCtrl.historywonders);

module.exports = router;