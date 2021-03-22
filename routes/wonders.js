const express = require('express');
const router = express.Router();
const wondersCtrl = require('../controllers/wonders');

router.get('/new', wondersCtrl.new);
router.post('/', wondersCtrl.create);
router.get('/:id', wondersCtrl.show);
router.get('/:id/edit', wondersCtrl.edit);
router.put('/:id/', wondersCtrl.update);

module.exports = router;