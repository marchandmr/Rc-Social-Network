const router = require("express").Router();
const user = require("../../controllers/userController");
const passport = require('../../config/passport');

// Matches with "/api/user"
router.route("/find")
    .get(user.findOne)

// find user by name /api/user/username
router.route("/username")
    .get(user.findByName)

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(user.findById)
    .put(user.update)
    .delete(user.remove);

// /api/user/signup is the route to create a user
router.post('/signup', user.signup);

// /api/user/login
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json({
        email: req.body.email

    });
});

//logout  /api/user/logout
router.post('/logout', user.logout);


module.exports = router;
