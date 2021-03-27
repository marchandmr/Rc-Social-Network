const router = require("express").Router();
const user = require("../../controllers/user");

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

module.exports = router;