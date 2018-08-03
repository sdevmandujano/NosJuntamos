var db = require("../models");

exports.getOptions = function(req, res) {
    console.log("Get Options " + req.params.id)

    db.Option.findAll({
        where: {
            EventId: req.params.id
        }
    })
    .then(function(options) {
        return res.status(200).send(options);
    }, function (err) {
        return res.status(500).send(err);
    })
}

exports.postOptions = function (req, res) {
    console.log("Create Options");
    console.log(req.body);

    var newOptions = [];

    req.body.forEach(element => {
        newOptions.push({
            date: element.date,
            time: element.time,
            place: element.place,
            votes: 0,
            EventId: req.params.id
        })
    });

    db.Option.bulkCreate(newOptions)
    .then(function(options) {
        return res.status(200).send(options);
    }, function(err) {
        return res.status(500).send(err);
    })
}

exports.voteOption = function (req, res) {

    db.Option.findOne({
        where: {
            EventId: req.params.id,
            id: req.params.opId
        }
    })
    .then(function(option) {
        var newVotes = option.votes + 1;

        db.Option.update({
            votes: newVotes
        }, {
            where: {
                id: option.id
            }
        }).then(function(updatedOption) {
            return res.status(200).send(updatedOption);
        }, function(err) {
            return res.status(500).send(err);
        })
    }, function (err) {
        return res.status(500).send(err);
    })
}