const Wonder = require('../models/wonder');

module.exports = {
    show,
    delete: deleteWonder
}

function show(req, res) {
    Wonder.findById(req.params.id, function(err, wonder) {
        res.render('wonders/delete/delete-entry', { title: 'Delete' + wonder.placeName + '?', wonder })
    })
}

// function deleteWonder(req, res) {
//     Wonder.deleteOne(req.params.id, function(err, wonder) {
//         if (wonder.isNature === true) {
//             res.redirect('natwonders');
//         } else if (wonder.isNature === false) {
//             res.redirect('historywonders');
//         }
//     });  
// }

function deleteWonder(req, res) {
    Wonder.findOne({_id:req.params.id}).exec(function(err, entry){
        if(entry) {
           entry.remove();
        }
    })
    Wonder.find({}, function(err, wonders) {
        res.render('wonders/historywonders', {title: `Ireland's Historical Wonders`, wonders});
    });
}