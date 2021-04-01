const router = require("express").Router();
const user = require("../../controllers/userController");
const passport = require('../../config/passport');

// Matches with "/api/user"
router.route("/")
    .get(user.findAll)
    .post(user.create);

// Matches with "/api/user/:id"
router
    .route("/:id")
    .get(user.findById)
    .put(user.update)
    .delete(user.remove);

// /api/signup is the route to create a user
router.post('/signup', user.signup);

// /api/login
router.post('/login', passport.authenticate('local'), user.authenticate);

module.exports = router;