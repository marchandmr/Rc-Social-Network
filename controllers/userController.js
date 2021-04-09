const { json } = require("express");
const db = require("../models");

// Defining methods for the postController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    // find username based on email 
    findOne: function (req, res) {
        db.User
            .findOne({ email: req.query.email })
            .then(dbModel => res.json(dbModel.username))
            .catch(err => res.status(422) / json(err));
    },

    // find user based on username
    findByName: function (req, res) {
        db.User
            .findOne({ username: req.query.username })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422) / json(err));
    },

    create: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    signup: (req, res) => {
        const { username, email, password, register_date } = req.body;
        db.User.create({
            'username': username,
            'email': email,
            'password': password,
            'register_date': register_date
        }

        )
            .then(((result) => {
                console.log(result);
                return res.json(result)
            }))
    },

    logout: (req, res) => {
        req.logout();

    }



};
