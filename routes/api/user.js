const router = require("express").Router();
const user = require("../../controllers/userController");
const passport = require('../../config/passport');

// Matches with "/api/user"
router.route("/find")
    .get(user.findOne)


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
    console.log("REQ:" + req)
    res.json({
        email: req.body.email

    });
});

//logout  /api/user/logout
router.post('/logout', user.logout);


module.exports = router;
