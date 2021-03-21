const Wonder = require('../models/wonder');

module.exports = {
    new: newWonder,
    create,
}

function newWonder(req, res) {
    res.render('wonders/new', {title: 'Add New Wonder'});
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
    if (req.body.tourText) {
        req.body.tourText = req.body.tourText.replace(/\s*,\s*/g, ',');
        req.body.tourText = req.body.tourText.split(',')
      };
    if (req.body.tourURL) {
        req.body.tourURL = req.body.tourURL.replace(/\s*,\s*/g, ',');
        req.body.tourURL = req.body.tourURL.split(',')
      };
    
    req.body.isNature = !!req.body.isNature
    
    Wonder.create(req.body, function(err, wonder) {
        // if (err) return res.redirect('/wonders/new');
        // if (err) console.log('Error, mate.');
        if (req.body.isNature === true) {
            res.redirect('/wonders/natwonders');
        } else {
            res.redirect('/wonders/historywonders');
        }
    })
}