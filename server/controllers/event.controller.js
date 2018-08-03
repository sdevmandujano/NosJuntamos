var db = require("../models");

exports.getEvent = function(req, res) {
    console.log("Get Event " + req.params.id);

    db.Event.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(function(event) {
        console.log(event.dataValues);
        return res.status(200).send(event);
    }, function(err) {
        return res.status(500).send(err)
    })
}

exports.postEvent = function(req, res) {
    console.log("Create Event");
    console.log(req.body);

    db.Event.create({
        name: req.body.name,
        description: req.body.description
    })
    .then(function(newEvent) {
        return res.status(200).send(newEvent);
    }, function(err) {
        return res.status(500).send(err)
    })
}