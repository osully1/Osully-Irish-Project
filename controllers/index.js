const Wonder = require('../models/wonder');

module.exports = {
    index,
    natwonders,
    historywonders,
}

function index(req, res) {
    res.render('index', {title: `O'Sully's Wonders of Ireland`});
}
function natwonders(req, res) {
    res.render('wonders/natwonders', {title: `Ireland's 7 Natural Wonders`});
}
function historywonders(req, res) {
    Wonder.find({}, function(err, wonders) {
        res.render('wonders/historywonders', {title: `Ireland's Historical Wonders`, wonders});
    });
}