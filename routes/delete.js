const express = require('express');
const router = express.Router();
const deleteCtrl = require('../controllers/delete');

router.get('/delete/delete-entry/:id', deleteCtrl.show);
router.delete('/:id', deleteCtrl.delete);

module.exports = router;