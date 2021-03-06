const Wonder = require('../models/wonder');

module.exports = {
    new: newWonder,
    create,
    show,
    edit,
    update,
}

function show(req, res) {
    Wonder.findById(req.params.id, function(err, wonder) {

        res.render('wonders/show', { title: wonder.placeName, wonder })
        // if (req.params.isNature === true) {
        //     res.render('wonders/natwonders/:id', {wonder})
        // } else {
        //     res.render('wonders/historywonders/:id')
        // }
    })
}

function newWonder(req, res) {
    res.render('wonders/new', {title: 'Add New Wonder'});
}

function edit(req, res) {
    Wonder.findById(req.params.id, function(err, wonder) {
        res.render('wonders/edit', { title: 'Edit Wonder', wonder,  wonderId: req.params.id });
    })
}

function update (req, res) {
    req.body.done = false;
    req.body.isNature = !!req.body.isNature
    Wonder.findByIdAndUpdate(req.params.id, req.body, function(err, doc) {
        if (doc.isNature === true) {
            res.redirect('/wonders/' + req.params.id);
        } else if (doc.isNature === false) {
            res.redirect('/wonders/' + req.params.id);
        }
    });
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